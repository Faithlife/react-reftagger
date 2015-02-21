var React, script, scriptIsAdded, refTagger;

React = require('react');

script = React.DOM.script;

if (typeof window !== "undefined" && window !== null) {
  if (window.refTagger == null) {
    window.refTagger = {

          settings: {
            bibleVersion: "ESV"     
          }
    };
  }
}


scriptIsAdded = false;


refTagger = React.createClass({
  displayName: 'refTagger',
  componentDidMount: function() {
    if (!scriptIsAdded) {
      return this.addScript();
    }
  },

  componentDidUpdate: function(prevProps, prevState) {
    window.refTagger.tag();
  },

  addScript: function() {
    var el, s;
    scriptIsAdded = true;
    el = document.createElement('script');
    el.type = 'text/javascript';
    el.async = true;
    el.src = '//api.reftagger.com/v2/RefTagger.js';
    s = document.getElementsByTagName('script')[0];
    return s.parentNode.insertBefore(el, s);
  },
  render: function() {
    return script(null);
  }
});

module.exports = refTagger;
