import { useState, useEffect } from 'react';
import { RefTaggerSettings } from './interfaces';

const addScript = (setScriptAdded: React.Dispatch<React.SetStateAction<boolean>>, language?: string): void => {
  setScriptAdded(true);
  const el = document.createElement('script');
  el.type = 'text/javascript';
  el.async = true;
  const suffix = language ? `.${language}.js` : '.js';
  el.src = `https://api.reftagger.com/v2/RefTagger${suffix}`;
  document.getElementsByTagName('body')[0].appendChild(el);
};

const addRefTagger = (settings: RefTaggerSettings): void => {
  window.refTagger = { settings };
};

export const RefTagger = (props: RefTaggerSettings): null => {
  const [scriptAdded, setScriptAdded] = useState(false);

  useEffect(() => {
    if (!scriptAdded) {
      addScript(setScriptAdded, props.language);
    }
    if (window && !window.refTagger) {
      addRefTagger(props);
    }
    if (window.refTagger && window.refTagger.tag) {
      window.refTagger.tag();
    }
  }, [scriptAdded, props]);

  return null;
};
