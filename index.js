import React, { Component } from 'react';

export default class RefTagger extends Component {

    constructor(props) {
        super(props); 
        
        const defaultSettings = {
            bibleVersion: "ESV"
        }

        if (typeof window !== "undefined" && window !== null) {
            if (window.refTagger == null) {
              window.refTagger = {
                settings: {
                    ...defaultSettings, 
                    ...props.settings
                }
              };
            }
        }
    }

    componentDidMount() {
        if(!RefTagger.scriptIsAdded) {
            return this.addScript(); 
        }
    }

    componentDidUpdate() {
        window.refTagger.tag(); 
    }

    addScript() {
        var el, s;
        RefTagger.scriptIsAdded = true;
        el = document.createElement('script');
        el.type = 'text/javascript';
        el.async = true;
        el.src = 'https://api.reftagger.com/v2/RefTagger.js';
        s = document.getElementsByTagName('script')[0];
        return s.parentNode.insertBefore(el, s);
    }

    render() {
        return(<div style={{display: 'none'}}></div>); 
    }
}

RefTagger.scriptIsAdded = false; 