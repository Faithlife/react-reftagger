# react-reftagger &middot; ![npm](https://img.shields.io/npm/v/react-reftagger)

Utilize [Faithlife RefTagger](https://faithlife.com/products/reftagger) in sites built with React.

## Installation

```sh
npm install react-reftagger

yarn add react-reftagger

pnpm i react-reftagger
```

## Usage

Import RefTagger for use

```javascript
import { RefTagger } from 'react-reftagger';
```

Use RefTagger as a component and provide the configuration options as props. Configuration options can be found in the [type declaration file](./src/interfaces.ts) or on the [RefTagger customization page](https://faithlife.com/products/reftagger/customize).

```JSX
<RefTagger bibleVersion={'ESV'} />;
```

## Advanced Usage

You can have RefTagger run on only part of your DOM via the `rootNode` configuration option.

```tsx
const [rootNode, setRootNode] = useState(null as Node);
const setRef = useCallback((node: Node) => {
  setRootNode(node);
}, []);

return (
  <div>
    <div>{`Here's John 1:1.`}</div>
    <div ref={setRef}>{`Here's John 1:2.`}</div>
    {!rootNode ? null : <RefTagger bibleVersion={'ESV'} rootNode={rootNode} />}
  </div>
);
```
