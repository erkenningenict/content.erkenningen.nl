import React, { useEffect } from 'react';
import Axios from 'axios';

/**
 * Dynamic React module loader for Erkenningen modules
 */
const ModuleLoader = (props) => {
  const loadjscssfile = (filename, filetype) => {
    if (filetype == 'js') {
      //if filename is a external JavaScript file
      var fileref = document.createElement('script');
      fileref.setAttribute('type', 'text/javascript');
      fileref.setAttribute('src', filename);
    } else if (filetype == 'script') {
      //if filename is a external JavaScript file
      var fileref = document.createElement('script');
      fileref.setAttribute('type', 'text/javascript');
      fileref.innerHTML = filename;
    } else if (filetype == 'css') {
      //if filename is an external CSS file
      var fileref = document.createElement('link');
      fileref.setAttribute('rel', 'stylesheet');
      fileref.setAttribute('type', 'text/css');
      fileref.setAttribute('href', filename);
    }
    if (typeof fileref != 'undefined')
      document.getElementsByTagName('head')[0].appendChild(fileref);
  };

  useEffect(() => {
    if (
      !(
        props &&
        props.children &&
        props.children[0] &&
        props.children[0].props &&
        props.children[0].props.href
      )
    ) {
      return;
    }

    const url = props.children[0].props.href;

    Axios.get(url).then((result) => {
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
          loadjscssfile(url + cssElem.href.replace(window.location.origin, ''), 'css');
        }
      }

      // Load scripts
      for (const scriptElem of parseElem.getElementsByTagName('script')) {
        if (scriptElem.src) {
          loadjscssfile(url + scriptElem.src.replace(window.location.origin, ''), 'js');
        } else {
          loadjscssfile(scriptElem.innerHTML, 'script');
        }
      }

      parseElem.remove();
    });
  }, []);

  return <div id="root" />;
};

export default ModuleLoader;
