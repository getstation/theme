import { theme } from '../../jss';
import classNames from 'classnames';
import * as React from 'react';
// @ts-ignore: no declaration file
import injectSheet from 'react-jss';

export enum InputSize {
  BIG, NORMAL, SMALL, XSMALL, XXSMALL,
}

export enum InputType {
  TEXT = 'text',
  PASSWORD = 'password',
}

interface Classes {
  container: string,
  input: string,
  inputXSmall: string,
  inputXXSmall: string,
  inputSmall: string,
  inputBig: string,
  header: string,
  label: string,
  error: string,
}

interface OwnProps {
  classes?: Classes,
  sheet?: any,
  className?: string,
  inputClassName?: string,
  inputSize?: InputSize,
  label?: string,
  error?: string,
  onValueChange?: (value: string, event: React.FormEvent<HTMLInputElement>) => any,
  refInput?: (inputEl: HTMLInputElement) => any,
}

type Props = OwnProps & React.HTMLProps<HTMLInputElement>;

@injectSheet({
  container: {
    maxWidth: 500,
  },
  input: {
    display: 'block',
    appearance: 'none',
    border: ({ error }: Props) => error ? `2px solid ${theme.colors.error}` : '1px solid rgba(41, 41, 41, 0.1)',
    padding: [0, 15],
    boxSizing: 'border-box',
    borderRadius: 30,
    minWidth: 200,
    width: '100%',
    height: 34,
    lineHeight: '34px',
    ...theme.fontMixin(11, 500),
    transition: 'all 250ms ease-out',
    color: ({ error }: Props) => error ? theme.colors.error : '#292929',
    backgroundColor: '#FFFFFF',
    '&:disabled': {
      opacity: 0.4,
    },
    '&:focus': {
      outline: 'none',
    },
    '&::-webkit-input-placeholder': {
      color: 'rgba(1, 1, 1, 0.3)',
    },
  },
  inputXSmall: {
    height: '24px',
    lineHeight: '24px',
  },
  inputXXSmall: {
    height: '20px',
    lineHeight: '20px',
    padding: '0 10px',
  },
  inputSmall: {
    height: '30px',
    lineHeight: '30px',
  },
  inputBig: {
    fontSize: '13px',
    height: '42px',
    lineHeight: '42px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  label: {
    display: 'block',
    margin: [0, 0, 8, 5],
    ...theme.fontMixin(12),
    color: ({ error }: Props) => error ? theme.colors.error : theme.colors.gray.middle,
  },
  error: {
    ...theme.fontMixin(10, 'bold'),
    color: theme.colors.error,
    textAlign: 'right',
    padding: [0, 5, 8, 10],
  },
})
export class Input extends React.Component<Props, {}> {

  constructor(props: Props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  public static defaultProps: Partial<Props> = {
    inputSize: InputSize.NORMAL,
    refInput: () =>{},
  };

  handleChange(event: React.FormEvent<HTMLInputElement>) {
    const { onChange, onValueChange } = this.props;
    const value = event.currentTarget.value;
    if (onChange) onChange(event);
    if (onValueChange) onValueChange(value, event);
  }

  render() {
    const { classes, inputClassName, className, inputSize, label, error, refInput, ...inputProps } = this.props;

    const sizeClassNames = {
      [InputSize.XXSMALL]: classes!.inputXXSmall,
      [InputSize.XSMALL]: classes!.inputXSmall,
      [InputSize.SMALL]: classes!.inputSmall,
      [InputSize.NORMAL]: '',
      [InputSize.BIG]: classes!.inputBig,
    };

    const _inputClassName = classNames(classes!.input, sizeClassNames[inputSize!], inputClassName);

    return (
      <div className={classNames(classes!.container, className)}>
        <div className={classes!.header}>
          {label ?
            <label className={classes!.label}>{label}</label>
            :
            <label className={classes!.label}>&nbsp;</label>
          }

          {error &&
          <span className={classes!.error}>{error}</span>
          }
        </div>

        <input ref={refInput} className={_inputClassName} onChange={this.handleChange} {...inputProps}>
          {this.props.children}
        </input>
      </div>
    );
  }
}
