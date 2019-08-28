import * as React from 'react';
import Autosuggest from 'react-autosuggest';

const theme : any = {
    container: {
        position: 'relative'
    },
    input: {
        width: 240,
        height: 30,
        padding: '10px 20px',
        fontFamily: 'Helvetica, sans-serif',
        fontWeight: 300,
        fontSize: 16,
        border: '1px solid #aaa',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
    },
    inputFocused: {
        outline: 'none'
    },
    inputOpen: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    },
    suggestionsContainer: {
        display: 'none'
    },
    suggestionsContainerOpen: {
        display: 'block',
        position: 'absolute',
        top: 51,
        width: 280,
        border: '1px solid #aaa',
        backgroundColor: '#fff',
        fontFamily: 'Helvetica, sans-serif',
        fontWeight: 300,
        fontSize: 16,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        zIndex: 2
    },
    suggestionsList: {
        margin: 0,
        padding: 0,
        listStyleType: 'none',
    },
    suggestion: {
        cursor: 'pointer',
        padding: '10px 20px'
    },
    suggestionHighlighted: {
        backgroundColor: '#ddd'
    }
};

const employees = [
    { name: 'Guillaume Arm', avatar: 'https://img.icons8.com/material-outlined/24/000000/home--v2.png' },
    { name: 'Hugo Mano', avatar: 'https://img.icons8.com/material-outlined/24/000000/home--v2.png' },
    { name: 'Maud Miguet', avatar: 'https://img.icons8.com/material-outlined/24/000000/home--v2.png' },
    { name: 'Alexandre Lachèze', avatar: 'https://img.icons8.com/material-outlined/24/000000/home--v2.png' },
    { name: 'Julien Berthomier', avatar: 'https://img.icons8.com/material-outlined/24/000000/home--v2.png' },
    { name: 'Mikaël Atier', avatar: 'https://img.icons8.com/material-outlined/24/000000/home--v2.png' },
    { name: 'Joël Charles', avatar: 'https://img.icons8.com/material-outlined/24/000000/home--v2.png' },
];

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str: any) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value: any) {
    const escapedValue = escapeRegexCharacters(value.trim());

    if (escapedValue === '') {
        return [];
    }

    const regex = new RegExp('^' + escapedValue, 'i');

    return employees.filter(language => regex.test(language.name));
}

function getSuggestionValue(suggestion: any) {
    return suggestion.name;
}

function renderSuggestion(suggestion: any) {
    return (
        <div>
            <img src={suggestion.avatar} />
            <span>{suggestion.name}</span>
        </div>
    );
}

interface Props {
}

interface State {
    value: any,
    suggestions: any,
}

export class InputTags extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            value: '',
            suggestions: []
        };
    }

    onChange = (event: any, { newValue, method }: any) => {
        this.setState({
            value: newValue
        });
    };

    onSuggestionsFetchRequested = ({ value }: any) => {
        this.setState({
            suggestions: getSuggestions(value)
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    render() {
        const { value, suggestions } = this.state;
        const inputProps = {
            placeholder: "Search for a teammate",
            value,
            onChange: this.onChange
        };

        return (
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
                theme={theme}
            />
        );
    }
}
