import * as React from 'react';
import { ThemeProvider, jss } from 'react-jss';
// @ts-ignore: no typing declaration for 'jss-nested'
import jssNested from 'jss-nested';
import { theme } from './jss';

export interface BrowserXThemeProviderProps {
  children: any,
}

jss.use(jssNested());

/**
 * BrowserXThemeProvider
 */
export class BrowserXThemeProvider extends React.Component<BrowserXThemeProviderProps, {}> {
  render() {
    return (
      <ThemeProvider theme={theme}>
        {this.props.children}
      </ThemeProvider>
    );
  }
}
