import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import { Skeleton } from '@erkenningen/ui';

/**
 * Dynamic React module loader for Erkenningen modules
 */
const ModuleLoader = (props) => {
  const [ready, setReady] = useState(false);
  const [rootElemId, setRootElemId] = useState('root');
  const [currentScriptElems, setCurrentScriptElems] = useState([]);
  const containerRef = React.createRef();

  const generateHash = (str) => {
    let i,
      l,
      hval = 0x811c9dc5;

    for (i = 0, l = str.length; i < l; i++) {
      hval ^= str.charCodeAt(i);
      hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
    }

    return ('0000000' + (hval >>> 0).toString(16)).substr(-8);
  };

  const loadInlineScript = async (elemId, scriptElems, script) => {
    const id = 'script' + elemId + generateHash(script.substr(0, 100));
    const fileref = document.createElement('script');
    fileref.setAttribute('type', 'text/javascript');
    fileref.id = id;
    fileref.innerHTML = script;

    scriptElems.push(fileref);
  };

  const loadExternalScript = (elemId, scriptElems, src) => {
    const id = 'script' + elemId + generateHash(src);
    const fileref = document.createElement('script');
    fileref.setAttribute('type', 'text/javascript');
    fileref.setAttribute('src', src);
    fileref.id = id;
    scriptElems.push(fileref);
  };

  const loadCss = async (elemId, scriptElems, href) => {
    const id = 'css' + elemId + generateHash(href);
    const fileref = document.createElement('link');
    fileref.setAttribute('rel', 'stylesheet');
    fileref.setAttribute('type', 'text/css');
    fileref.setAttribute('href', href);
    fileref.id = id;
    scriptElems.push(fileref);
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

    const scriptElems = [];
    let scriptRootElemId;

    Axios.get(url + '?_c=' + Date.now(), { withCredentials: false }).then(async (result) => {
      if (result.status !== 200) {
        console.error('Could not fetch external module from ' + url, result);
        return;
      }

      // Parse html, find all css <link> and js <script> tags and include it in this site
      const html = result.data;

      const parseElem = document.createElement('parse');
      parseElem.innerHTML = html;

      // Determine root element id (we can't have multiple root elements with same id)
      const moduleEntry = parseElem.getElementsByClassName('module-entry');
      if (moduleEntry.length === 0) {
        console.error('Could not load external module. No module entry found.');
        return;
      }
      if (moduleEntry.length > 1) {
        console.error('Multiple module entries found');
        return;
      }

      scriptRootElemId = moduleEntry[0].id;
      setRootElemId(scriptRootElemId);

      // Load css
      for (const cssElem of parseElem.getElementsByTagName('link')) {
        if (cssElem.href) {
          loadCss(
            moduleEntry[0].id,
            scriptElems,
            url + cssElem.href.replace(window.location.origin, ''),
          );
        }
      }

      // Load external scripts
      for (const scriptElem of parseElem.getElementsByTagName('script')) {
        if (scriptElem.src) {
          loadExternalScript(
            moduleEntry[0].id,
            scriptElems,
            url + scriptElem.src.replace(window.location.origin, ''),
          );
        }
      }

      // Load inline scripts
      for (const scriptElem of parseElem.getElementsByTagName('script')) {
        if (!scriptElem.src) {
          loadInlineScript(moduleEntry[0].id, scriptElems, scriptElem.innerHTML);
        }
      }

      setCurrentScriptElems(scriptElems);

      parseElem.parentNode.removeChild(parseElem);
    });

    return () => {
      // Remove scripts
      const el = document.getElementById(scriptRootElemId);
      el.parentNode.removeChild(el);
      for (const elem of scriptElems) {
        elem.parentNode.removeChild(elem);
      }
    };
  }, []);

  // Add elems in separate effect to allow root elem to be added in DOM
  useEffect(() => {
    ReactDOM.render(<div id={rootElemId} />, containerRef.current, async () => {
      for (const elem of currentScriptElems) {
        document.getElementsByTagName('body')[0].appendChild(elem);
        // Wait for external scripts to be fully loaded
        if (elem.tagName === 'SCRIPT' && elem.src) {
          await new Promise(async (resolve, reject) => {
            elem.addEventListener('load', () => {
              resolve(true);
            });
          });
        }
      }
      if (currentScriptElems.length) {
        setReady(true);
      }
    });
  }, [currentScriptElems]);

  return (
    <>
      {ready ? null : <Skeleton format={skeletonFormat} />}
      <div ref={containerRef} />
    </>
  );
};

export default ModuleLoader;
