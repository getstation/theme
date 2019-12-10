import React from 'react';
import Select, { components } from 'react-select';
import injectSheet, { WithSheet } from 'react-jss';
import { OptionProps } from 'react-select/src/components/Option';
import { NoticeProps } from 'react-select/src/components/Menu';

import { theme } from '../../jss';
import { IgnoreJSSNested } from '../../types';
import { RoundPicture } from '../RoundPicture';

const styles = {
  roundPicture: {
    marginRight: 12,
  },
  label: {
    display: 'block',
    margin: [0, 0, 8, 5] as any,
    ...theme.fontMixin(12),
    color: theme.colors.gray.middle,
  },
  select: {

  },
};

const customStyles = {
  container: (provided: any, _state: any) => ({
    ...provided,
    minWidth: 200,
    height: 34,
  }),
  control: (provided: any, _state: any) => ({
    ...provided,
    borderRadius: 30,
    fontSize: 12,
    fontWeight: 500,
    border: '1px solid rgba(41, 41, 41, 0.1)',
    color: '#292929',
    backgroundColor: '#FFFFFF',
  }),
  indicatorSeparator: (provided: any, _state: any) => ({
    ...provided,
    backgroundColor: '#3767ac',
  }),
  indicatorsContainer: (provided: any, _state: any) => ({
    ...provided,
    borderRadius: '0 30px 30px 0',
    backgroundColor: '#3767ac',
  }),
  menu: (provided: any, state: any) => ({
    ...provided,
    border: '1px solid #c9c9c9',
    boxShadow: '0 5px 10px 0 rgba(0, 0, 0, 0.12)',
    borderRadius: 10,
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    display: 'flex',
    alignItems: 'center',
    fontSize: 12,
    padding: '5px 20px',
    color: state.isFocused ? 'white' : 'initial',
    backgroundColor: state.isFocused ? '#4f94f8' : 'initial',
  }),
  noOptionsMessage: (provided: any, state: any) => ({
    ...provided,
    fontSize: 12,
  }),
};

interface OwnProps {
  options: SelectInputOption[],
  value: SelectInputOption | null,
  onChange: (option: SelectInputOption) => void,
  placeholder?: string,
  noOptionsMessage?: string,
  className?: string,
  label?: string,
}

export interface SelectInputOption {
  value: string,
  label: string,
  picture?: string,
}

type ValueType<T> = T | ReadonlyArray<T> | null | undefined;

type Props = OwnProps & WithSheet<IgnoreJSSNested<typeof styles>, {}>;

class SelectInputImpl extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  handleChange = (selectedOption: ValueType<SelectInputOption>) => {
    if (!selectedOption || Array.isArray(selectedOption)) return;

    // @ts-ignore TS not able to recognize selectedOption is not a ReadOnlyArray
    // https://github.com/microsoft/TypeScript/issues/17002
    this.props.onChange(selectedOption);
  }

  renderOption = (componentProps: OptionProps<SelectInputOption>) => {
    const { data } = componentProps;
    const { classes } = this.props;

    return (
      <components.Option {...componentProps}>
        {data.picture &&
          <RoundPicture
            className={classes.roundPicture}
            item={data}
            size={22}
            borderColor="transparent"
          />
        }
        <div>{data.label}</div>
      </components.Option>
    );
  }

  renderNoOptionsMessage = (componentProps: NoticeProps<SelectInputOption>) => {
    const { classes, noOptionsMessage } = this.props;

    return (
      <components.NoOptionsMessage {...componentProps}>
        <p>{noOptionsMessage || 'No options'}</p>
      </components.NoOptionsMessage>
    );
  }

  render() {
    const { classes, className, options, placeholder, value, label } = this.props;

    return (
      <div className={className}>
        { label &&
          <div className={classes.label}>{label}</div>
        }
        <Select<SelectInputOption>
          className={classes.select}
          placeholder={placeholder}
          value={value}
          onChange={this.handleChange}
          options={options}
          styles={customStyles}
          components={{
            Option: this.renderOption,
            NoOptionsMessage: this.renderNoOptionsMessage,
          }}
        />
      </div>
    );
  }
}

export const SelectInput = injectSheet(
  styles as IgnoreJSSNested<typeof styles>
)(SelectInputImpl) as React.ComponentType<OwnProps>;
