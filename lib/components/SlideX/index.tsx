import * as React from 'react';
// @ts-ignore: no declaration file
import injectSheet from 'react-jss';

interface Classes {
  stepAnimationContainer: string,
  stepAnimation: string,
}

interface Props {
  classes?: Classes,
  step: number,
}

@injectSheet({
  stepAnimationContainer: {
    overflowX: 'hidden',
    width: '100%',
  },
  stepAnimation: {
    transition: 'transform .6s',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    width: '100%',
    transform: ({ step }: Props) => step ? `translateX(-${step * 100}%)` : 'translateX(0)',

    '& > *': {
      minWidth: '100%',
    },
  },
})
export class SlideX extends React.PureComponent<Props, {}> {

  static defaultProps = {
    step: 0,
  };

  render() {
    const { classes, children } = this.props;

    return (
      <div className={classes!.stepAnimationContainer}>
        <div className={classes!.stepAnimation}>
          {children}
        </div>
      </div>
    );
  }
}
