# react-reftagger

Utilize [Faithlife RefTagger](https://faithlife.com/products/reftagger) in sites built with React.

## Installation:

```sh
npm install react-reftagger

yarn add react-reftagger

pnpm i react-reftagger
```

## Usage:

Import RefTagger for use:

```javascript
import { RefTagger } from 'react-reftagger';
```

RefTagger configuration options can be found in the type declaration file or [on the RefTagger customization page](https://faithlife.com/products/reftagger/customize).

```javascript
const refTaggerSettings = {
  bibleVersion: 'NASB',
  dropShadow: true,
  roundCorners: true,
  tooltipStyle: 'dark',
  customStyle: {
    heading: {
      fontSize: '18px',
    },
    body: {
      fontSize: '16px',
    },
  },
};
```

Use RefTagger as a component and provide the configuration options as props.

```JSX
<RefTagger {...refTaggerSettings} />;
```
