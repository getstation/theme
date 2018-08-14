import * as path from 'path';
import * as React from 'react';
// @ts-ignore: no declaration file
import injectSheet from 'react-jss';
import { ThemeTypes } from '../../types';
import classNames = require('classnames');

export interface IconOwnProps {
  classes?: {
    icon: string,
  },
  symbolId: IconSymbol,
  width?: number,
  height?: number,
  size?: number | string,
  color?: string,
}
export type IconProps = React.HTMLProps<SVGSVGElement> & IconOwnProps;

const styles = (theme: ThemeTypes) => ({
  icon: {
    width: (props: IconProps) => props.width || props.size,
    height: (props: IconProps) => props.height || props.size,
    fill: (props: IconProps) => props.color || theme.icons.color.base,
  },
});

export class IconImpl extends React.PureComponent<IconProps, {}> {
  render() {
    const { classes, symbolId } = this.props;
    const svgProps = { ...this.props };
    [
      'classes', 'symbolId', 'width', 'height', 'size', 'color', 'className', 'sheet', 'theme',
    ].forEach(prop => {
      if (prop in svgProps) delete (svgProps as any)[prop];
    });

    return (
      <svg
        className={classNames(classes!.icon, this.props.className)}
        {...svgProps}
      >
        <use xlinkHref={getIconHref(symbolId)} />
      </svg>
    );
  }
}

const STATIC_PATH = path.join(__dirname, '../../../static');
function getIconHref(symbolId: IconSymbol) {
  return path.join(STATIC_PATH, `Icons.svg#icon--${symbolId}`);
}

export const Icon = injectSheet(styles)(IconImpl) as typeof IconImpl;

export enum IconSymbol {
  CHAT = 'chat',
  CHECKMARK = 'checkmark',
  CROSS = 'cross',
  DETACH = 'detach',
  DOWNLOAD = 'download',
  FOCUS = 'focus',
  MARK_READ = 'mark-read',
  NAV_BACK = 'nav-back',
  NAV_FORTH = 'nav-forth',
  NOTIFICATION = 'notification',
  PLUS = 'plus',
  QUICK_SEARCH = 'quick-search',
  REATTACH = 'reattach',
  SEARCH = 'search',
  SHOW = 'show',
  STAR = 'star',
  SUBVIEW_COPIED = 'subview-copied',
  SUBVIEW_COPY = 'subview-copy',
  SUBVIEW_MINIMIZE = 'subview-minimize',
  SUBVIEW_OPEN = 'subview-open',
  TIME = 'time',
  TRASH = 'trash',
  USER = 'user',
  USER_ADD = 'user-add',
  COG = 'cog',
  UNHAPPY = 'unhappy',
  DOC = 'doc',
  SHEET = 'sheet',
  SLIDE = 'slide',
  UPDATE = 'update',
  HEARTFILLED = 'heartfilled',
  HEARTSTROKE = 'heartstroke',
  LIFEBOAT = 'lifeboat',
  NUDGE = 'nudge',
  BELL = 'bell',
  BELL_OFF = 'bell-off',
  ARROW_LEFT = 'arrow-left',
  ARROW_RIGHT = 'arrow-right',
  LOADING = 'loading',
  EXTENSION = 'extension',
  SUPPORT = 'support',
  TEXT = 'text',
  SEND = 'send',
  HINT = 'hint',
  RETURN = 'return',
}
