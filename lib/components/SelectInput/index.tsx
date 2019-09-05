import React from 'react';
import Select from 'react-select';
import injectSheet, { WithSheet } from 'react-jss';
import { IgnoreJSSNested } from '../../types';

const styles = {
  container: {
    minWidth: 200,
  },
};

interface OwnProps {
  options: SelectInputOption[],
  onChange: (option: any) => any,
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
    console.log(`Option selected:`, selectedOption);
  };

  render() {
    const { classes, options } = this.props;
    const { selectedOption } = this.state;

    return (
      <Select
        className={classes.container}
        placeholder="Search members from your organization"
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}

export const SelectInput = injectSheet(styles as IgnoreJSSNested<typeof styles>)(SelectInputImpl);
