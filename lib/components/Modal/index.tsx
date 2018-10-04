import classNames from 'classnames';
import * as React from 'react';
// @ts-ignore: no declaration file
import injectSheet from 'react-jss';
import { ModalWrapper } from '../ModalWrapper';
import {ThemeTypes} from "../../types";
import {Icon, IconSymbol} from "../Icon";
import {Button, Style} from "../Button";

interface Classes {
  container: string,
  header: string,
  applicationIcon: string,
  body: string,
  loading: string,
  title: string,
  description: string,
  footer: string,
}

interface Props {
  classes?: Classes,
  classNameModalBody?: string,
  title?: string,
  description?: string,
  onCancel?: () => void,
  cancelContent?: string,
  onContinue?: () => void,
  continueContent?: string,
  continueDanger?: boolean,
  applicationIcon?: string,
  isLoading?: boolean,
}

@injectSheet((theme: ThemeTypes) => ({
  container: {
    position: 'relative',
    width: 350,
    maxHeight: 500,
    backgroundColor: theme.$bodyBkg,
    borderRadius: 5,
  },
  header: {
    width: '100%',
    padding: ({ applicationIcon, title, description }: Props) => {
      if (applicationIcon) {
        return '70px 20px 20px';
      }
      if (title || description) {
        return '20px';
      }
      return '0px';
    },
    textAlign: 'center',
    backgroundColor: theme.colors.gray.light,
    boxSizing: 'border-box',
    borderRadius: [5, 5, 0, 0],
  },
  applicationIcon: {
    display: ({ applicationIcon }: Props) => applicationIcon ? 'initial' : 'none',
    position: 'absolute',
    top: -45,
    left: 'calc(50% - 45px)',
    width: 90,
    height: 90,
    backgroundImage: ({ applicationIcon }: Props) => `url('${applicationIcon}')`,
    backgroundColor: theme.colors.gray.light,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    backgroundPosition: 'center',
    borderRadius: '100%',
    border: '3px solid white',
  },
  title: {
    ...theme.fontMixin(18, 500),
    color: theme.colors.black,
    marginBottom: 5,
  },
  description: {
    ...theme.fontMixin(13),
    color: '#292929',
    opacity: .4,
  },
  body: {
    color: theme.colors.black,
    position: 'relative',
    padding: 20,
  },
  '@keyframes spin': {
    '100%': { transform: 'rotate(360deg)' },
  },
  loading: {
    ...theme.mixins.flexbox.containerCenter,
    ...theme.mixins.position('absolute', 0, 0),
    ...theme.mixins.size('100%'),
    backgroundColor: 'rgba(255, 255, 255, 1)',
    '& svg': {
      animation: `spin 1s linear infinite`,
    },
  },
  footer: {
    whiteSpace: 'nowrap',
    display: 'flex',
    justifyContent: 'space-between',
    padding: 20,
    '& button': {
      flexBasis: ({ onContinue }: Props) => onContinue ? '48%' : '100%',
      marginLeft: 5,
    },
  },
}))
export class Modal extends React.PureComponent<Props, {}> {
  render() {
    const {
      classes, title, description, classNameModalBody, onCancel, cancelContent, onContinue, continueContent,
      isLoading, children, continueDanger,
    } = this.props;

    return (
      <ModalWrapper onCancel={onCancel}>
        <div className={classes!.container}>
          <div className={classes!.header}>
            <div className={classes!.applicationIcon} />
            <div className={classes!.title}>{title}</div>
            <div className={classes!.description}>{description}</div>
          </div>

          <div className={classNames(classes!.body, classNameModalBody)}>
            { isLoading &&
            <div className={classes!.loading}>
              <Icon symbolId={IconSymbol.LOADING} size={25} color={'#000'} />
            </div>
            }

            {children}
          </div>

          { (onCancel || onContinue) &&
          <div className={classes!.footer}>
            { onCancel &&
            <Button onClick={onCancel} btnStyle={Style.TERTIARY}>
              {cancelContent || `Cancel`}
            </Button>
            }

            { onContinue &&
            <Button onClick={onContinue} btnStyle={continueDanger ? Style.DANGER : Style.PRIMARY}>
              {continueContent || `OK`}
            </Button>
            }
          </div>
          }
        </div>
      </ModalWrapper>
    );
  }
}
