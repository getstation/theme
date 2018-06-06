import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { BrowserXThemeProvider } from '../lib/BrowserXThemeProvider';
import { COLORS, Theme } from '../lib/constants';
import { GradientProvider } from '../lib/gradient';

const req = require.context('../', true, /stories.tsx$/);
function loadStories() {
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
