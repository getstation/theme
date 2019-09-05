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
  noSuggestions: {
    padding: 5,
  },
  roundPicture: {
    margin: '0 8px 0 5px',
  },
  selectedItems: {
    margin: 0,
    padding: 0,
  },
  selectedItem: {
    listStyleType: 'none',
    display: 'flex',
    alignItems: 'center',
    margin: '5px 0',
  },
  selectedItemContent: {
    flex: 1,
    marginLeft: 10,
  },
  inviteButton: {
    color: '#4f94f8',
  },
};

interface OwnProps {
  items: InputListItem[],
  onAddItem: (item:  InputListItem) => any,
  onRemoveItem: (item:  InputListItem) => any,
}

export interface InputListItem {
  id: string,
  name: string,
  selected: boolean,
  picture: string,
}

type Props = OwnProps & WithSheet<IgnoreJSSNested<typeof styles>, {}>;

interface State {
  activeSuggestionIndex: number, // The active selection's index
  filteredSuggestions: any, // The suggestions that match the user's input
  showSuggestions: boolean, // Whether or not the suggestion list is shown
  userInput: string, // What the user has entered
}

class InputListImpl extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      activeSuggestionIndex: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: '',
    };
  }

  handleAddItem = () => {
    const { activeSuggestionIndex, filteredSuggestions } = this.state;

    const activeSuggestion: InputListItem = filteredSuggestions[activeSuggestionIndex];
    if (!activeSuggestion || activeSuggestion.selected) return;

    this.setState({
      activeSuggestionIndex: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: '',
    });

    this.props.onAddItem(activeSuggestion);
  };

  onInputChange = (e: any) => {
    const { items } = this.props;
    const userInput = e.currentTarget.value;

    const filteredSuggestions = items.filter((item: InputListItem) =>
        item.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      activeSuggestionIndex: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    });
  };

  onKeyDown = (e: any) => {
    const { activeSuggestionIndex, filteredSuggestions } = this.state;

    // User pressed the enter key
    if (e.keyCode === 13) this.handleAddItem();

    // User pressed the up arrow
    else if (e.keyCode === 38) {
      if (activeSuggestionIndex === 0) return;
      this.setState({
        activeSuggestionIndex: activeSuggestionIndex - 1,
      });
    }

    // User pressed the down arrow
    else if (e.keyCode === 40) {
      if (activeSuggestionIndex - 1 === filteredSuggestions.length) return;
      this.setState({
        activeSuggestionIndex: activeSuggestionIndex + 1,
      });
    }
  };

  renderSelectedItems = () => {
    const { classes, items, onRemoveItem } = this.props;

    const itemsSelected = items.filter((item: InputListItem) => item.selected); // TODO: memoize

    return (
      <ul className={classes.selectedItems}>
        { itemsSelected.map((item: InputListItem) =>
          <li className={classes.selectedItem} key={item.id}>
            <RoundPicture
              className={classes.roundPicture}
              item={item}
              size={27}
              borderColor="transparent"
            />
            <div className={classes.selectedItemContent}>{item.name}</div>
            <Icon
              symbolId={IconSymbol.CROSS}
              size={16}
              color="currentColor"
              onClick={() => onRemoveItem(item)}
            />
          </li>)
        }
      </ul>
    )
  };

  renderSuggestionsList = () => {
    const { classes } = this.props;
    const { activeSuggestionIndex, filteredSuggestions } = this.state;

    return (
      <ul className={classes.suggestions}>
        { filteredSuggestions.length ? filteredSuggestions.map((suggestion: InputListItem, index: number) => {
          const className = classNames(
            classes.suggestion,
            { [classes.suggestionActive]: index === activeSuggestionIndex }
          );

          return (
            <li className={className} key={suggestion.id} onClick={this.handleAddItem}>
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
        }) : (
          <div className={classes.noSuggestions}>
            <p>No one found. Maybe they’re not on Station?</p>
            <p className={classes.inviteButton}>
              Invite them
            </p>
          </div>
        )}
      </ul>
    )
  };

  render() {
    const { classes } = this.props;
    const { showSuggestions, userInput } = this.state;

    return (
      <div className={classes.container}>
        { this.renderSelectedItems()}

          <Input
              type={InputType.TEXT}
              placeholder="Search members from your organization"
              value={userInput}
              onChange={this.onInputChange}
              onKeyDown={this.onKeyDown}
          />

          {showSuggestions && userInput &&
            this.renderSuggestionsList()
          }
      </div>
    );
  }
}

export const InputList = injectSheet(styles as IgnoreJSSNested<typeof styles>)(InputListImpl);
