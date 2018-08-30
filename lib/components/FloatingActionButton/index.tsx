import { GradientType, withGradient } from '../../gradient';
import * as React from 'react';
// @ts-ignore: no declaration file
import injectSheet from 'react-jss';
import { ThemeTypes } from '../../types';

interface IClasses {
  container: string,
}

interface IProps {
  classes?: IClasses,
  onClick?: () => void,
  children?: any,
}

interface IStateFromProps {
  themeGradient: string
}

// type Props = IProps & IStateFromProps;
type Props = IProps;

@injectSheet((theme: ThemeTypes) => ({
  container: {
    ...theme.mixins.flexbox.containerCenter,
    position: 'fixed',
    bottom: 20,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 100,
    border: 0,
    outline: 'none',
    // backgroundImage: (props: Props) => props.themeGradient,
    backgroundColor: 'gray',
    color: 'white',
    boxShadow: '0px 2px 10px 0 rgba(150, 150, 150, 0.75)',
    cursor: 'pointer',
  },
}))
export class FloatingActionButton extends React.PureComponent<Props, {}> {
  render() {
    const { classes, onClick, children } = this.props;

    return (
      <button className={classes!.container} onClick={onClick}>
        { children }
      </button>
    );
  }
}

// export const FloatingActionButton = withGradient(GradientType.normal)(FloatingActionButtonImpl);
