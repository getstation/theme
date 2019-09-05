import * as React from 'react';
import injectSheet, { WithSheet } from 'react-jss';
import { IgnoreJSSNested } from '../../types';
import { Input, InputType } from '../Input';
import classNames = require('classnames');
import { Icon, IconSymbol } from '../Icon';
import { RoundPicture } from '../RoundPicture';

const styles = {
  container: {
    position: 'relative',
  },
  noSuggestions: {
    color: '#999',
    padding: '0.5rem',
  },
  suggestions: {
    position: 'absolute',
    width: '100%',
    maxHeight: 110,
    overflow: 'hidden auto',
    border: '1px solid #c9c9c9',
    color: '#292929',
    backgroundColor: '#FFFFFF',
    boxShadow: '0 5px 10px 0 rgba(0, 0, 0, 0.12)',
    fontFamily: 'Helvetica, sans-serif',
    fontWeight: 500,
    fontSize: 11,
    borderRadius: 10,
    zIndex: 2,
    margin: 0,
    padding: 0,
  },
  suggestion: {
    listStyleType: 'none',
    display: 'flex',
    alignItems: 'center',
    padding: '5px 8px',
    fontSize: 13,
    color: '#949494',
    userSelect: 'none',
    '&:hover': {
      backgroundColor: '#4f94f8',
      color: 'white',
    },
  },
  suggestionActive: {
    backgroundColor: '#4f94f8',
    color: 'white',
  },
  roundPicture: {
    margin: '0 8px 0 5px',
  },
};

interface OwnProps {
  items: InputListItem[],
}

export interface InputListItem {
  id: string,
  name: string,
  selected: boolean,
  picture: string,
}

type Props = OwnProps & WithSheet<IgnoreJSSNested<typeof styles>, {}>;

interface State {
  activeSuggestion: number, // The active selection's index
  filteredSuggestions: any, // The suggestions that match the user's input
  showSuggestions: boolean, // Whether or not the suggestion list is shown
  userInput: string, // What the user has entered
}

class InputListImpl extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: '',
    };
  }

  onChange = (e: any) => {
    const { items } = this.props;
    const userInput = e.currentTarget.value;

    // Filter our suggestions that don't contain the user's input
    const filteredSuggestions = items.filter(
      item =>
        item.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    });
  };

  onClick = (e: any) => {
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText
    });
  };

  onKeyDown = (e: any) => {
    const { activeSuggestion, filteredSuggestions } = this.state;

    // User pressed the enter key
    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion].name
      });
    }
    // User pressed the up arrow
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    // User pressed the down arrow
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  render() {
    const { classes } = this.props;
    const { activeSuggestion, filteredSuggestions, showSuggestions, userInput } = this.state;

    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul className={classes.suggestions}>
            {filteredSuggestions.map((suggestion: any, index: any) => {
              const className = classNames(classes.suggestion, { [classes.suggestionActive]: index === activeSuggestion });

              return (
                <li className={className} key={suggestion.id} onClick={this.onClick}>
                  <Icon
                    symbolId={IconSymbol.CHECKMARK}
                    color={suggestion.selected ? '#4f94f8' : 'transparent'}
                    size={16}
                  />
                  <RoundPicture
                    className={classes.roundPicture}
                    item={suggestion}
                    size={22}
                    borderColor="transparent"
                  />
                  <div>{suggestion.name}</div>
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div className={classes.noSuggestions}>
            <em>No suggestions, you're on your own!</em>
          </div>
        );
      }
    }

    return (
      <div className={classes.container}>
          {/*<ul>
            { itemsSelected.map((item: InputListItem) =>
              <li key={item.id}>{ item.name }</li>)
            }
          </ul>*/}
          <Input
              type={InputType.TEXT}
              placeholder="Search members from your organization"
              value={userInput}
              onChange={this.onChange}
              onKeyDown={this.onKeyDown}
          />
          {suggestionsListComponent}
      </div>
    );
  }
}

export const InputList = injectSheet(styles as IgnoreJSSNested<typeof styles>)(InputListImpl);
