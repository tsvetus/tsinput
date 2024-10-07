# Icon

Renders TSInput icon using embeded TSInput font and icon name.

Before using:

1. Copy content from public/fonts folder to your fonts folder.
2. Include tisinput-font.css stylesheet to your `index.html` file.

## Example

<div id="example"></div>

## Usage

### CSS

<div id="css"></div>

### Code

<div id="code"></div>

## API

### props

- `className`: `string | IconClass` - Icon css class.
- `style`: `object | IconStyle` - Icon css style.
- `icon`: `string` - Icon name.
- `name`: `string` - Component name will return back in event.
- `data`: `any` - Component data will return back in event.
- `invalid`: `any` - Component invalid state.
- `wait`: `any` - Component wait state.
- `baseClass`: `string` - Icon base class. Default is `tsi-icon`. Designed for use with other fonts. The resulting icon class is "`<baseClass> <baseClass>-<icon>`".

### events

- `onClick`: `TsiMouseEventHandler<HTMLElement>` - Fires on every icon click when state is not `wait`. If assigned, icon hover cursor becomes `pointer` by default.
- `onKeyDown`: `TsiKeyboardEventHandler<HTMLElement>` - Fires on every key press.

> Events payload:
>
> - `TsiMouseEvent<HTMLElement>` - Extends React `MouseEvent`.
> - `TsiKeyboardEvent<HTMLElement>` - Extends React `KeyboardEvent`.
>
> Extended properties:
>
> - `name` - Current `name` property value.
> - `data` - Current `data` property value.
> - `icon` - Current icon name taken from `icon` property.
> - `value` - The same as `icon`.

#### IconClass

- `_`: `string` - Class for icon.
- `active`: `string` - Class for actice state.
- `invalid`: `string` - Class for invalid state.
- `wait`: `string` - Class for wait state.

#### IconStyle

- `_`: `object` - Style for icon.
- `active`: `object` - Style for actice state.
- `invalid`: `object` - Style for invalid state.
- `wait`: `object` - Style for wait state.

### Classes

- `tsi-icon` - Class for icon.
- `tsi-icon-active` - Class for actice state.
- `tsi-icon-invalid` - Class for invalid state.
- `tsi-icon-wait` - Class for wait state.

## Available icons

<div id="icons"></div>
