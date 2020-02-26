# react-reftagger

Utilize reftagger on sites built with react 

Usage:

```javascript
import { RefTagger } from 'react-reftagger';

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
