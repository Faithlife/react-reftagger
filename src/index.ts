import { useState, useEffect } from 'react';
import { RefTaggerSettings } from './interfaces'

const addScript = (setScriptAdded: React.Dispatch<React.SetStateAction<boolean>>): void => {
  setScriptAdded(true);
  const el = document.createElement('script');
  el.type = 'text/javascript';
  el.async = true;
  el.src = 'https://api.reftagger.com/v2/RefTagger.js';
  document.getElementsByTagName('body')[0].appendChild(el);
};

const addRefTagger = (settings: RefTaggerSettings): void => {
  window.refTagger = { settings };
};

export const RefTagger = (props: RefTaggerSettings): null => {
  const [scriptAdded, setScriptAdded] = useState(false);

  useEffect(() => {
    if (!scriptAdded) addScript(setScriptAdded);
    if (window && !window.refTagger) addRefTagger(props);
    if (window.refTagger && window.refTagger.tag) window.refTagger.tag();
  }, []);

  return null;
};