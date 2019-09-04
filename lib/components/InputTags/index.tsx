import React from 'react';
import TagsInput from 'react-tagsinput';
import Autosuggest from 'react-autosuggest';
import memoize from 'memoize-one';
import { RoundPicture } from '../RoundPicture';
import injectSheet, { WithSheet } from 'react-jss';
import { IgnoreJSSNested } from '../../types';
import { Icon, IconSymbol } from '../Icon';

const theme : any = {
  container: {
    display: 'inline-flex',
  },
  suggestionsContainer: {
    display: 'none',
  },
  suggestionsContainerOpen: {
    display: 'block',
    position: 'absolute',
    left: 24,
    marginTop: 40,
    width: '88%',
    border: '1px solid #c9c9c9',
    color: '#292929',
    backgroundColor: '#FFFFFF',
    boxShadow: '0 5px 10px 0 rgba(0, 0, 0, 0.12)',
    fontFamily: 'Helvetica, sans-serif',
    fontWeight: 500,
    fontSize: 11,
    borderRadius: 10,
    zIndex: 2,
    overflow: 'hidden',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  suggestion: {
    display: 'flex',
    alignItems: 'center',
    padding: '5px 8px',
    fontSize: 13,
    color: '#949494',
    userSelect: 'none',
  },
  suggestionHighlighted: {
    color: 'white',
    backgroundColor: '#4f94f8',
  },
};

const styles = {
  '@global': {
    '.react-tagsinput': {
      display: 'block',
      appearance: 'none',
      border: '1px solid #c9c9c9',
      padding: 4,
      boxSizing: 'border-box',
      borderRadius: 20,
      minHeight: 34,
      lineHeight: '34px',
      fontSize: 11,
      fontWeight: 500,
      transition: 'all 250ms ease-out',
      color: '#292929',
      backgroundColor: '#FFFFFF',
    },
    '.react-tagsinput span': {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
    },
    '.react-tagsinput-tag': {
      display: 'inline-flex',
      alignItems: 'center',
      backgroundColor: '#eaeaea',
      margin: '0 5px 5px 0',
      padding: 5,
      fontFamily: 'Helvetica, sans-serif',
      fontSize: 12,
      borderRadius: 30,
      lineHeight: 0,
    },
    '.react-tagsinput-tag:last-of-type': {
      marginBottom: 0,
    },
    '.react-tagsinput-remove': {
      cursor: 'pointer',
      fontWeight: 'bold',
    },
    '.react-tagsinput-tag a::before': {
    },
    '.react-tagsinput-input': {
      background: 'transparent',
      border: 0,
      color: '#777',
      fontFamily: 'sans-serif',
      fontSize: 13,
      fontWeight: 400,
      marginBottom: 6,
      marginTop: 1,
      outline: 'none',
      padding: 5,
      width: 80,
    },
  },
  roundPicture: {
    margin: '0 8px 0 5px',
  },
  suggestionContent: {
  },
  renderTag: {
  },
  renderTagRoundPicture: {
    marginRight: 6,
  },
  renderTagContent: {
  },
  renderTagRemove: {
  },
};

interface OwnProps {
  items: InputTagsItem[],
  onUpdateTags: (tags: InputTags) => any,
}

export interface InputTagsItem {
  id: string,
  name: string,
  selected: boolean,
  picture: string,
}

export type InputTags = String[];

type Props = OwnProps & WithSheet<IgnoreJSSNested<typeof styles>, {}> & React.HTMLProps<HTMLInputElement>;

interface State {
  tags: InputTags,
}

class InputTagsImpl extends React.Component<Props, State> {
  static getTags = memoize(
    (items: InputTagsItem[]) => items
      .filter((item: InputTagsItem) => item.selected)
      .map((item: InputTagsItem) => item.name)
  );

  constructor (props: Props) {
    super(props);

    this.state = {
      tags: [],
    };
  }

  static getDerivedStateFromProps(props: Props, state: State) {
    const tags = InputTagsImpl.getTags(props.items);

    if (tags !== state.tags) {
      return {
        tags,
      };
    }
    return null;
  }

  renderSuggestion = (suggestion: InputTagsItem) => {
    const { classes } = this.props;
    return (
      <>
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
        <div className={classes.suggestionContent}>{suggestion.name}</div>
      </>
    );
  }

  autocompleteRenderInput = ({ addTag, ...props }: any) => {
    const handleOnChange = (e: any, { newValue, method }: any) => {
      if (method === 'enter') {
        e.preventDefault();
      } else {
        props.onChange(e);
      }
    };

    const inputValue = (props.value && props.value.trim().toLowerCase()) || '';
    const inputLength = inputValue.length;

    const suggestions = this.props.items.filter((item: InputTagsItem) => {
      return item.name.toLowerCase().slice(0, inputLength) === inputValue;
    });

    const AutosuggestProps = {
      inputProps: {
        ...props,
        onChange: handleOnChange,
        placeholder: this.state.tags.length === 0 ? 'Search members from your organization' : '',
      },
      shouldRenderSuggestions: (value: string) => (value && value.trim().length > 0) as boolean,
      getSuggestionValue: (suggestion: InputTagsItem) => suggestion.name,
      renderSuggestion: this.renderSuggestion,
      onSuggestionSelected: (e: React.SyntheticEvent<HTMLElement>, { suggestion }: any) => addTag(suggestion.name),
      onSuggestionsClearRequested: () => {},
      onSuggestionsFetchRequested: () => {},
    };

    return (
      <Autosuggest
        ref={props.ref}
        suggestions={suggestions}
        theme={theme}
        {...AutosuggestProps}
      />
    );
  }

  renderTag = (renderTagsProps: any) => {
    const { classes, items } = this.props;
    const { tag, key, disabled, onRemove, className, classNameRemove, getTagDisplayValue, ...other } = renderTagsProps;
    const onClickRemove = () => onRemove(key);
    return (
      <span key={key} {...other} className={className}>
          <RoundPicture
            className={classes.renderTagRoundPicture}
            item={items.find((item: InputTagsItem) => item.name === tag)}
            size={18}
            borderColor="transparent"
          />

          <div className={classes.renderTagContent}>{getTagDisplayValue(tag)}</div>

        {!disabled &&
        <a className={classNameRemove} onClick={onClickRemove}>
            <Icon symbolId={IconSymbol.CROSS} color={'gray'} size={20} />
        </a>
        }
        </span>
    );
  }

  render () {
    return (
      <TagsInput
        renderInput={this.autocompleteRenderInput}
        renderTag={this.renderTag}
        value={this.state.tags}
        onChange={this.props.onUpdateTags}
      />
    );
  }
}

export const InputTags = injectSheet(styles as IgnoreJSSNested<typeof styles>)(InputTagsImpl);
