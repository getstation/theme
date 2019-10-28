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

## Dev

#### Requirement for developpement usage

To work with storybook inside Bx you will need to link the module 

- `git clone http://github.com/getstation/theme`
- `cd theme`
- `yarn`
- `yarn link`
- `cd /path/to/my/Bx`
- `yarn link @getstation/theme`

#### Storybook

You cna see modifications to you components inside `storybook`, just start it `yarn run storybook` & go to [localhost](http://localhost:6006)


#### Expose modifications to BX

Rebuild `@getstaion/theme` via `yarn run build` inside the repo everytime you did change `theme` 

#### Pull request

Create a RC version for your PR to be tested:

- `yarn version --preid=rc --prerelease (0.0.0-rc-0)` for a new, or increment RC
- `yarn version --premajor (1.0.0-rc.0) || --preminor (0.1.0-rc.0) || --prepatch (0.0.1-rc.0)` for a new Version + RC
- `git push --follow-tags` to push rc version version

## Publish
- Build docs: `yarn build-docs`
- verify `CHANGELOG.md` entries
- Increment version via: (`from 0.0.0`)
  - `yarn version --major (1.0.0) || --minor (0.1.0) || --patch (0.0.1)`
  - NB: if the version was a *RC* those command will automatically chaned it a release one with same version !👌
- Publish: `yarn publish`