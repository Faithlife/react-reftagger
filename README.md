# react-reftagger
Utilize reftagger on sites built with react 

## Installation
```
npm install --save react-reftagger
```


## Usage
Dropping the Reftagger element in at any point within your React app will allow RefTagger to work throughout the whole thing! We suggest putting it somewhere in your top level element (i.e. <App />), but it's up to you. 

```javascript
import React, {Component} from 'react'; 
import RefTagger from 'react-reftagger'; 

class Example extends Component {
  render() {
    return(
      <div>
        <p>John 1:1 is our reference</p>
        <RefTagger />
      </div>
    )
  }
}
```

You can also add customizations to your Reftagger element by providing a settings attribute. For example: 
```
import React, {Component} from 'react'; 
import RefTagger from 'react-reftagger'; 

class Example extends Component {
  render() {
    return(
      <div>
        <p>John 1:1 is our reference</p>
        <RefTagger settings={{
          bibleVersion: 'NIV'
        }}/>
      </div>
    )
  }
}
```
Note that these customizations are applied globally to all RefTagger references. Customizations options can be found [here](https://faithlife.com/products/reftagger/customize). Also note that customizations cannot be tied to state (i.e. they cannot be changed dynamically). Whatever customizations are provided for the initial load of RefTagger will remain for it's lifecycle. 

## Protips
### Dealing with dynamic scripture references.
For best results, scripture references should be wrapped (or maybe better said, isolated) in their own element. This ensure that dynamic scripture references are updated with RefTagger when they change. For example: 
```javascript
import React, {Component} from 'react'; 
import RefTagger from 'react-reftagger'; 

class Example extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      scriptRef: 'John 1:1'
    }
  }

  changeRef() {
    this.setState({
      scriptRef: 'Romans 1:17'
    })
  }

  render() {
    return(
      <div>
        <p>{this.state.scriptRef} is our reference</p>
        <button onClick={() => {
          this.changeRef(); 
        }}> Change reference </button>
        <RefTagger />
      </div>
    )
  }
}
```
This code will tag the reference (initially to John 1:1), but after clicking "change reference" (causing a state change), our RefTagger reference remains the same; 

Instead, wrap your scripture reference with a span element so that it will change dynamically with the scripture. 
```javascript
import React, {Component} from 'react'; 
import RefTagger from 'react-reftagger'; 

class Example extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      scriptRef: 'John 1:1'
    }
  }

  changeRef() {
    this.setState({
      scriptRef: 'Romans 1:17'
    })
  }

  render() {
    return(
      <div>
        <p><span>{this.state.scriptRef}</span> is our reference</p>
        <button onClick={() => {
          this.changeRef(); 
        }}> Change reference </button>
        <RefTagger />
      </div>
    )
  }
}
```


### Why do I need to use the RefTagger React element?
The typical way for adding RefTagger to a website is by dropping the code snippet from the [RefTagger Website](https://faithlife.com/products/reftagger). This method, however, is problematic for usage with React. When you add the script to the bottom of the body element with the "standard" method, the script runs immediately as it assumes all your scripture references have already been rendered by the DOM. When using React, however, this probably won't be the case. Using the "standard method" with React, RefTagger will run before React has triggered the DOM to render all the contents of the app --- leaving your scripture reference untagged!

The RefTagger React component gets around this by triggering the `window.refTagger.tag()` method whenever React updates the DOM. Thus, dynamic updates to components will cause RefTagger to retag whatever is present in the DOM at that time. 

You could of course use the standard method of adding RefTagger and manually call `window.refTagger.tag()` in your components, but this would be prone to human error (i.e. you forget to call the tag method when a reference has been changed and DOM has been updated). 