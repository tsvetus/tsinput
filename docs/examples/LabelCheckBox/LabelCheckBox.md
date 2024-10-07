# LabelEdit

Extends Edit component with Label and outer Icon.

## Example

<div id="example"></div>

## Usage

### CSS

<div id="css"></div>

### Code

<div id="code"></div>

## API

### props

- `className`: `string | LabelGroupClass` - Component css class.
- `style`: `object` - Component css style.
- `name`: `string` - Component name will return back in event.
- `data`: `any` - Component data will return back in event.
- `label`: `any` - Label caption.
- `icon`: `string` - Icon name.

#### LabelEditClass

### events

- `onClick` - Fires on every icon click. If assigned, icon hover cursor becomes `pointer`. Event object contains React Synthetic event and additional properties:
  - `name` - current `name` property value;
  - `data` - current `data` property value;
  - `icon` - current icon name taken from `icon` property;
  - `value` - the same as `icon`;
