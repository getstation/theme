import React from 'react';
import Select, { components } from 'react-select';
import injectSheet, { WithSheet } from 'react-jss';
import { IgnoreJSSNested } from '../../types';
import { RoundPicture } from '../RoundPicture';

const styles = {
  roundPicture: {
    marginRight: 12,
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
  })
};

interface OwnProps {
  options: SelectInputOption[],
  onChange: (option: any) => any,
  placeholder: string,
  noOptionsMessage: string,
  className?: string,
}

export interface SelectInputOption {
  value: string,
  label: string,
  picture: string,
}

type Props = OwnProps & WithSheet<IgnoreJSSNested<typeof styles>, {}>;

interface State {
  selectedOption: any,
}

class SelectInputImpl extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      selectedOption : '',
    };
  }

  handleChange = (selectedOption: any) => {
    this.setState({ selectedOption: '' });
    this.props.onChange(selectedOption);
  };

  renderOption = (componentProps : any) => {
    const { data } = componentProps;
    const { classes } = this.props;

    return (
      <components.Option {...componentProps}>
        <RoundPicture
          className={classes.roundPicture}
          item={data}
          size={22}
          borderColor="transparent"
        />
        <div>{data.label}</div>
      </components.Option>
    )
  };

  renderNoOptionsMessage = (componentProps : any) => {
    const { classes, noOptionsMessage } = this.props;

    return (
      <components.NoOptionsMessage {...componentProps}>
        <p>{noOptionsMessage || 'No options'}</p>
      </components.NoOptionsMessage>
    )
  };

  render() {
    const { className, options, placeholder } = this.props;
    const { selectedOption } = this.state;

    return (
      <Select
        className={className}
        placeholder={placeholder}
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        styles={customStyles}
        components={{
          Option: this.renderOption,
          NoOptionsMessage: this.renderNoOptionsMessage,
        }}
      />
    );
  }
}

export const SelectInput = injectSheet(styles as IgnoreJSSNested<typeof styles>)(SelectInputImpl);

