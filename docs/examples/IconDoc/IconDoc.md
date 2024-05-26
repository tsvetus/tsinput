# Icon

Renders TSInput icon using embeded TSInput font and icon name.

Before using:

1. Copy content fonts from public/fonts folder to your public fonts folder.
2. Include tisinput-font.css stylesheet to your `index.html` file.

## Usage

### CSS

<div id="css"></div>

### Code

<div id="code"></div>

### Example

<div id="example"></div>

## API

### props

- `className`: `string` - Icon css class.
- `style`: `object` - Icon css style.
- `icon`: `string` - Icon name.
- `name`: `string` - Component name will return back in event.
- `data`: `any` - Component data will return back in event.
- `baseClass`: `string` - Icon base class. Default is `tsi-icon`. Designed for use with other fonts. The resulting icon class is "`<baseClass> <baseClass>-<icon>`".

### events

- `onClick` - Fires on every icon click. If assigned, icon hover cursor becomes `pointer`. Event object contains React Synthetic event and additional properties:
  - `name` - current `name` property value;
  - `data` - current `data` property value;
  - `icon` - current icon name taken from `icon` property;
  - `value` - the same as `icon`;

## Available icons

<div id="icons"></div>
