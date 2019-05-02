import classNames from 'classnames';
import * as React from 'react';
import injectSheet from 'react-jss';
import { Button, ButtonProps, Icon, IconSymbol, Size } from '../..';

// outer props
export type ButtonIconProps = ButtonProps & {
  iconColor?: string,
  symbolId: IconSymbol,
  text?: string,
  iconClassName?: string,
};

interface Classes {
  button: string,
  buttonText: string,
}

interface InjectSheetProps {
  classes: Classes,
  sheet: any
}

const styles = {
  button: {
    paddingLeft: ({ text }: ButtonIconProps) => text ? '10px' : '0px',
    paddingRight: ({ text }: ButtonIconProps) => text ? '20px' : '0px',
  },
  buttonText: {
    verticalAlign: 'top',
  },
};

class ButtonIconImp extends React.Component<InjectSheetProps & ButtonIconProps, {}> {

  static defaultProps = {
    iconColor: 'rgba(255, 255, 255, 0.6)',
  };

  renderIcon() {
    const { classes, iconClassName, symbolId, text, iconColor } = this.props;
    const size = this.getIconSize();
    const icon = (
      <Icon
        key="icon"
        className={iconClassName}
        symbolId={symbolId}
        color={iconColor}
        size={size}
      />
    );
    if (!text) return icon;
    const textSpan = (
      <span
        key="text"
        className={classes.buttonText}
      >
        {text}
      </span>
    );
    return [
      icon,
      textSpan,
    ];
  }

  getIconSize = () => {
    switch (this.props.btnSize) {
      // case Size.XXXSMALL:
      //   return 16;
      case Size.XXSMALL:
        return 20;
      case Size.XSMALL:
        return 25;
      case Size.SMALL:
        return 30;
      case Size.BIG:
        return 42;
      default:
        return 34;
    }
  }

  render() {
    const {
      className: upperClassName,
      // filter out uncecessary props for Button
      classes,
      sheet,
      iconColor,
      symbolId,
      text,
      iconClassName,

      ...buttonProps
    } = this.props;

    return (
      <Button
        className={classNames(classes.button, upperClassName)}
        {...buttonProps}
      >
        {this.renderIcon()}
      </Button>
    );
  }
}

// force outer typing
export const ButtonIcon = injectSheet(styles)(ButtonIconImp) as unknown as React.ComponentType<ButtonIconProps>;
