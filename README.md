# Custom Select

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Properties

### `options` (required)

An array of options to select

```typescript
<Select
  options={[
    { name: 'Ocean', value: 'ocean' },
    { name: 'Orange', value: 'orange' },
    { name: 'Yellow', value: 'yellow' },
    { name: 'Forest', value: 'forest' },
  ]}
  placeholder=""
  value=""
/>
```

![Image](demo/options.png)

### `placeholder` (required)

A string value that shows up when no other items are selected

```typescript
<Select placeholder="Select an item" options={[]} value="" />
```

![Image](demo/placeholder.png)

### `value` (required)

The current HTML value of the select; if value matches one of the option values, that option should be selected by default

```typescript
<Select
  value="orange"
  options={[
    { name: 'Ocean', value: 'ocean' },
    { name: 'Orange', value: 'orange' },
    { name: 'Yellow', value: 'yellow' },
    { name: 'Forest', value: 'forest' },
  ]}
  placeholder=""
/>
```

![Image](demo/value.png)

### `clearable` (optional)

If true, show a close button to clear input

```typescript
<Select clearable options={[]} value="" placeholder="" />
```

![Image](demo/clearable.png)

### `multiple` (optional)

If true, allow user select multiple options

```typescript
<Select
  multiple
  options={[
    { name: 'Ocean', value: 'ocean' },
    { name: 'Orange', value: 'orange' },
    { name: 'Yellow', value: 'yellow' },
    { name: 'Forest', value: 'forest' },
  ]}
  value=""
  placeholder=""
/>
```

![Image](demo/multiple.png)

### `styles` (optional)

allow user to style each part of the select component:

| Name         | Description            |
| ------------ | ---------------------- |
| root         | Root wrapper           |
| wrapper      | Root Input element     |
| input        | Main input element     |
| values       | Values wrapper         |
| value        | Value element          |
| valueIcon    | Value icon element     |
| actions      | Actions wrapper        |
| separator    | Divider element        |
| actionIcon   | Action icon element    |
| dropdown     | Dropdown element       |
| itemsWrapper | Dropdown items wrapper |
| item         | Dropdown item element  |

```typescript
<Select
  styles={{ actionIcon: { color: 'orange' } }}
  clearable
  options={[]}
  value=""
  placeholder=""
/>
```

![Image](demo/styles.png)
