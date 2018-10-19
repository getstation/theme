import * as React from 'react';
import injectSheet, { WithSheet } from 'react-jss';
// @ts-ignore: no declaration file
import KeyHandler, { KEYDOWN } from 'react-key-handler';
import { ThemeTypes } from '../../types';

interface OwnProps {
  onCancel?: (e: React.SyntheticEvent<HTMLElement>) => void,
  backgroundOverlay?: boolean,
}

const styles = (theme: ThemeTypes) => ({
  container: {
    position: 'absolute' as 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    ...theme.mixins.flexbox.containerCenter,
    backgroundColor: ((props: OwnProps) => props.backgroundOverlay ? 'rgba(0, 0, 0, .3)' : 'none') as any,
    zIndex: theme.$zIndexSupra,
  },
});

type Props = OwnProps & WithSheet<typeof styles>;

class ModalWrapperImpl extends React.PureComponent<Props, {}> {
  public static defaultProps = {
    backgroundOverlay: true,
    onCancel: () => {},
  };

  modalWrapper!: HTMLDivElement | null;

  constructor(props: Props) {
    super(props);

    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.setModalWrapperRef = this.setModalWrapperRef.bind(this);
  }

  /**
   using Portal kinda disturbs ClickOutside.
   let's do some logic here to check that the click outside
   is definitely outside ModalWrapper before calling hide
   **/
  handleClickOutside(e: React.SyntheticEvent<HTMLElement>) {
    if (!this.modalWrapper) return;
    const target = e.target as HTMLElement;
    if (e.currentTarget === target) this.props.onCancel!(e);
  }

  setModalWrapperRef(modalWrapper: HTMLDivElement | null) {
    this.modalWrapper = modalWrapper;
  }

  render() {
    const { classes, onCancel, children } = this.props;

    return (
      <div className={classes.container} ref={this.setModalWrapperRef} onClick={this.handleClickOutside}>
        { onCancel &&
        <KeyHandler
          keyEventName={KEYDOWN}
          keyValue="Escape"
          onKeyHandle={onCancel}
        />
        }

        {children}
      </div>
    );
  }
}

export const ModalWrapper = injectSheet(styles)(ModalWrapperImpl);
