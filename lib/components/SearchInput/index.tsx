import { Icon, IconSymbol } from '../Icon';
import * as Mousetrap from 'mousetrap';
import * as React from 'react';
import { DebounceInput } from 'react-debounce-input';
// @ts-ignore: no declaration file
import injectSheet from 'react-jss';
import {ThemeTypes} from "../../types";

export interface IClasses {
  container: string,
  icon: string,
  input: string,
}

export interface IProps {
  classes?: IClasses,
  placeholder: string,
  value: string,
  onChange: (value: string) => any,
  autofocus?: boolean,
}

@injectSheet((theme: ThemeTypes) => ({
  container: {
    padding: [0, 10],
    height: 40,
    borderRadius: 20,
    width: '100%',
    maxWidth: 600,
    display: 'flex',
    alignItems: 'center',
    color: '#999',
    overflow: 'hidden',
    backgroundColor: theme.colors.gray.light,
  },
  icon: {
    fill: '#949494',
    width: 25,
    height: 25,
  },
  input: {
    border: 'none',
    flexGrow: 1,
    height: '100%',
    fontSize: '14px',
    backgroundColor: 'transparent',
  },
}))
export class SearchInput extends React.PureComponent<IProps, {}> {
  inputRef: any;

  constructor(props: IProps) {
    super(props);

    this.inputRef = React.createRef();
  }

  componentWillMount() {
    Mousetrap.bind('mod+f', (e: any) => {
      if (this.inputRef) {
        e.preventDefault();
        this.inputRef.current.focus();
      }
    }, 'keydown');
  }

  componentWillUnmount() {
    Mousetrap.unbind('mod+f');
  }

  handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.props.onChange(e.target.value);
  }

  render() {
    const { classes, placeholder, value, autofocus } = this.props;

    return (
      <div className={classes!.container}>
        <Icon symbolId={IconSymbol.SEARCH} size={40} className={classes!.icon} />

        <DebounceInput
          minLength={0}
          debounceTimeout={150}
          className={classes!.input}
          autoFocus={autofocus}
          type="search"
          placeholder={placeholder}
          value={value}
          onChange={(e) => this.handleInputChange(e)}
          ref={this.inputRef}
        />
      </div>
    );
  }
}
