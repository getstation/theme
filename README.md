# Station Theme
[![Build Status](https://travis-ci.com/getstation/theme.svg?branch=master)](https://travis-ci.com/getstation/theme)

## TL;DR

```
npm install @getstation/theme
```

## Usage
https://getstation.github.io/theme/storybook/index.html

## TypeScript
https://getstation.github.io/theme/typedoc/index.html

## How to add an icon
To add an icon to the theme, follow this 2 steps:

**1 - Add the svg to the static list**
- Open `static/Icons.svg`
- Add the svg path to the list of symbol, like:
```
<symbol id="icon--xxx" viewBox="[...]">
  <path d="[...]"/>
</symbol>
```
Replace `xxx` by the name of your icon

**2 - Register the new icon in the typing**
- Open `lib/components/Icon/index.tsx`
- Add the new icon to the enum list:
```
export enum IconSymbol {
  [...]
  ICON_NAME = 'xxx'
}
```
The value `xxx` should match the name set in part 1.

---
Tadaa 🎉

Don't forget to update the changelog and publish to see the changes when everything is good !

## Publish
- Build docs: `yarn build-docs`
- Bump version in `package.json`
- verify `CHANGELOG.md` entries
- Publish: `npm publish`