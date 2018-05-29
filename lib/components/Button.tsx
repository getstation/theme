import * as React from 'react';
// @ts-ignore
import injectSheet from 'react-jss';
import classNames = require('classnames');

export enum Size {
  BIG, NORMAL, SMALL, XSMALL, XXSMALL,
}
export enum Style {
  PRIMARY, SECONDARY, TERTIARY, LINK,
}

interface OwnProps {
  classes?: any,
  sheet?: any,
  btnSize?: Size,
  btnStyle?: Style
}
type Props = OwnProps & React.HTMLProps<HTMLButtonElement>;

const styles = {
  button: {
    appearance: 'none',
    border: 'none',
    padding: (props: Props) => isRenderingIcon(props) ? 0 : '0 20px',
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
  buttonLink: {
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 0.6)',
    backgroundColor: 'transparent',
    textDecoration: 'underline',
    '&:hover:enabled, &:active:enabled': {
      color: 'rgba(255, 255, 255, 0.8)',
    },
  },
};
class ButtonImpl extends React.Component<Props, {}> {

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
      [Style.LINK]: classes.buttonLink,
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

// Helpers
const isRenderingIcon = (props: Props): boolean => {
  const childrenIsObject = typeof props.children === 'object';
  if (!childrenIsObject) return false;
  const childrenHasProps = typeof (props.children as React.ReactElement<typeof props.children>).props !== ('undefined' || 'null');
  if (!childrenHasProps) return false;
  return Object.keys((props.children as React.ReactElement<typeof props.children>).props!)
    .some((prop: string) => prop === 'symbolId');
};

export const Button = injectSheet(styles)(ButtonImpl) as React.Component<Props, {}>;
