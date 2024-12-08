# tsinput

React UI components

## Installation

### Package installation

```
npm install tsinputlib
```

### Prepare your project to use tsinputlib default styles and fonts

1. Copy `public/css/tsinput.min.css` file to your css folder.
2. Copy content of `public/fonts` forlder to your fonts folder.
3. Add links to tsinput fonts and css styles tou your `index.html` file head section as follows:

```html
<!doctype html>
<html lang="en">
  <head>
    ...
    <link rel="stylesheet" href="css/tsinput.min.css" />
    <link rel="stylesheet" href="fonts/tsinput-font.css" />
    ...
  </head>
  ...
</html>
```

## Usage

[Examples page](https://tsvetus.github.io/tsinput/)

### Styles

```css
.tsi-docs-label {
  font-size: 16px;
  margin: 0.5em;
  max-width: 320px;
}

.tsi-docs-label-content {
  padding: 0.5em;
  border: 1px solid rgb(2, 0, 134);
  border-radius: 5px;
}

.tsi-docs-label-green {
  color: green;
}

.tsi-docs-label-blue {
  color: blue;
}
```

### Code

```jsx
import React from 'react'

import { Label } from 'tsinput'

import './App.css'

const App = () => {
  return (
    <>
      <h4>Label stylization example:</h4>
      <Label className="tsi-docs-label" label="Label caption:">
        <div className="tsi-docs-label-content">Class name will be applied to the root element</div>
      </Label>
      <Label
        className={{ _: 'tsi-docs-label tsi-docs-label-green', label: 'tsi-docs-label-blue' }}
        text="Label caption:"
      >
        <div className="tsi-docs-label-content">
          To use class for text, use text &quot;key&quot; in the style label text and &quot;_&quot; for the root element
        </div>
      </Label>
      <Label className="tsi-docs-label" style={{ color: 'red', label: { color: 'green' } }} label="Label caption:">
        <div className="tsi-docs-label-content">Using &quot;style&quot; property is also available</div>
      </Label>
    </>
  )
}

export default App
```
