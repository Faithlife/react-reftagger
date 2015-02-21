# react-reftagger
Utilize reftagger on sites built with react 

Usage:

```javascript
var RefTagger = require('react-reftagger');

// Now add the script at the bottom of your render function.
var MyComponent = React.createClass({
  render: function() {
    return (
      <div>
        // SNIP
        // SNIP
        <RefTagger />
      </div>
    );
  }
});
```
