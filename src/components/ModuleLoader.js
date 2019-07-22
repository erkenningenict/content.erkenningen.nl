import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Skeleton } from '@erkenningen/ui';

/**
 * Dynamic React module loader for Erkenningen modules
 */
const ModuleLoader = (props) => {
  const [ready, setReady] = useState(false);

  const loadInlineScript = (script) => {
    const fileref = document.createElement('script');
    fileref.setAttribute('type', 'text/javascript');
    fileref.innerHTML = script;
    if (typeof fileref != 'undefined') {
      document.getElementsByTagName('head')[0].appendChild(fileref);
    }
  };

  const loadExternalScript = (src) => {
    return new Promise((resolve, reject) => {
      const fileref = document.createElement('script');
      fileref.setAttribute('type', 'text/javascript');
      fileref.setAttribute('src', src);

      if (typeof fileref != 'undefined') {
        document.getElementsByTagName('head')[0].appendChild(fileref);
      }

      fileref.addEventListener('load', () => {
        resolve(true);
      });
    });
  };

  const loadCss = (href) => {
    const fileref = document.createElement('link');
    fileref.setAttribute('rel', 'stylesheet');
    fileref.setAttribute('type', 'text/css');
    fileref.setAttribute('href', href);

    if (typeof fileref != 'undefined')
      document.getElementsByTagName('head')[0].appendChild(fileref);
  };

  const parseProps = () => {
    let result = { url: null, skeletonFormat: null };

    if (
      !(
        props &&
        props.children &&
        props.children[0] &&
        props.children[0].props &&
        props.children[0].props.href
      )
    ) {
      return result;
    }

    result.url = props.children[0].props.href;

    if (props.skeleton) {
      result.skeletonFormat = props.skeleton.split('N').join('\n');
    }

    return result;
  };

  const { url, skeletonFormat } = parseProps();

  useEffect(() => {
    if (!url) {
      return;
    }

    Axios.get(url + '?_c=' + Date.now, { withCredentials: false }).then(async (result) => {
      if (result.status !== 200) {
        return;
      }

      // Parse html, find all css <link> and js <script> tags and include it in this site
      const html = result.data;

      const parseElem = document.createElement('parse');
      parseElem.innerHTML = html;

      // Load css
      for (const cssElem of parseElem.getElementsByTagName('link')) {
        if (cssElem.href) {
          loadCss(url + cssElem.href.replace(window.location.origin, ''), 'css');
        }
      }

      // Load and wait until external scripts have been loaded
      for (const scriptElem of parseElem.getElementsByTagName('script')) {
        if (scriptElem.src) {
          await loadExternalScript(url + scriptElem.src.replace(window.location.origin, ''), 'js');
        }
      }

      setReady(true);

      // Load inline scripts
      for (const scriptElem of parseElem.getElementsByTagName('script')) {
        if (!scriptElem.src) {
          loadInlineScript(scriptElem.innerHTML, 'script');
        }
      }

      parseElem.remove();
    });
  }, []);

  return (
    <>
      {ready ? null : <Skeleton format={skeletonFormat} />}
      <div id="root" />
    </>
  );
};

export default ModuleLoader;
