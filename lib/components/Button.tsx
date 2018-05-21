import * as React from 'react';
// @ts-ignore
import injectSheet from 'react-jss';
import classNames = require('classnames');

export enum Size {
  BIG, NORMAL, SMALL, XSMALL, XXSMALL,
}
export enum Style {
  PRIMARY, SECONDARY, TERTIARY,
}

export interface OwnProps {
  classes?: any,
  sheet?: any,
  btnSize?: Size,
  btnStyle?: Style
}
export type Props = OwnProps & React.HTMLProps<HTMLButtonElement>;

const styles = {
  button: {
    appearance: 'none',
    border: 'none',
    padding: '0 20px',
    borderRadius: '34px',
    height: '34px',
    lineHeight: '34px',
    fontSize: '11px',
    fontWeight: 700,
    transition: 'all 250ms ease-out',
    cursor: 'pointer',
    '&:disabled': {
      cursor: 'default',
      opacity: 0.4,
    },
    '&:focus': {
      outline: 'none',
    },
  },
  buttonXSmall: {
    height: '24px',
    lineHeight: '24px',
  },
  buttonXXSmall: {
    height: '20px',
    lineHeight: '20px',
    padding: '0 10px',
  },
  buttonSmall: {
    height: '30px',
    lineHeight: '30px',
  },
  buttonBig: {
    fontSize: '13px',
    height: '42px',
    lineHeight: '42px',
  },
  buttonPrimary: {
    backgroundColor: '#292929',
    color: '#fff',
    '&:hover:enabled, &:active:enabled': {
      color: 'rgba(255, 255, 255, 0.8)',
    },
  },
  buttonSecondary: {
    color: 'rgba(255, 255, 255, 0.6)',
    backgroundColor: 'rgba(255,255,255, 0.1)',
    '&:hover:enabled, &:active:enabled': {
      backgroundColor: 'rgba(255,255,255, 0.2)',
    },
  },
  buttonTertiary: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    color: 'rgba(0, 0, 0, 0.4)',
    '&:hover:enabled, &:active:enabled': {
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
  },
};
class Button extends React.Component<Props, {}> {

  public static defaultProps: Partial<Props> = {
    btnSize: Size.NORMAL,
    btnStyle: Style.PRIMARY,
  };

  render() {
    const {
      classes,
      className: upperClassName,
      btnSize, btnStyle,
      sheet: _,
      ...buttonProps } = this.props;

    const sizeClassNames = {
      [Size.XXSMALL]: classes.buttonXXSmall,
      [Size.XSMALL]: classes.buttonXSmall,
      [Size.SMALL]: classes.buttonSmall,
      [Size.NORMAL]: '',
      [Size.BIG]: classes.buttonBig,
    };

    const styleClassNames = {
      [Style.PRIMARY]: classes.buttonPrimary,
      [Style.SECONDARY]: classes.buttonSecondary,
      [Style.TERTIARY]: classes.buttonTertiary,
    };

    const className = classNames(
      classes.button,
      sizeClassNames[btnSize!],
      styleClassNames[btnStyle!],
      upperClassName
    );

    return (
      <button
        className={className}
        {...buttonProps}
      >
        {this.props.children}
      </button>
    );
  }
}

export default injectSheet(styles)(Button);
