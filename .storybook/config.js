import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { BrowserXThemeProvider } from '../lib/BrowserXThemeProvider';
import { COLORS, Theme } from '../lib/constants';
import { GradientProvider } from '../lib/gradient';
import { setOptions } from '@storybook/addon-options';

setOptions({
    name: 'Station Theme v' + require('../package.json').version,
    hierarchySeparator: /\//,
    hierarchyRootSeparator: /\|/,
});

const req = require.context('../', true, /stories.tsx$/);
function loadStories() {
  require('../lib/stories/home');
  req.keys().forEach(filename => req(filename));
}

addDecorator((story) => (
  <BrowserXThemeProvider>
    <GradientProvider themeColors={COLORS.get(Theme.dawn).colors}>
      {story()}
    </GradientProvider>
  </BrowserXThemeProvider>
));

configure(loadStories, module);
