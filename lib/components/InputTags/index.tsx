import React from 'react';
import TagsInput from 'react-tagsinput';
import Autosuggest from 'react-autosuggest';
import { RoundPicture } from '../RoundPicture';
import injectSheet, {WithSheet} from "react-jss";
import {IgnoreJSSNested} from "../../types";
import {Icon, IconSymbol} from "../Icon";

function states () {
    return [
        { name: 'Guillaume Arm', member: true, picture: 'https://dgivdslhqe3qo.cloudfront.net/careers/members/15768/thumb_avatar_1558702997.png' },
        { name: 'Hugo Mano', member: false, picture: 'https://dgivdslhqe3qo.cloudfront.net/careers/members/15767/thumb_avatar_1558702986.png' },
        { name: 'Maud Miguet', member: true, picture: 'https://dgivdslhqe3qo.cloudfront.net/careers/members/15764/thumb_avatar_1558702913.png' },
        { name: 'Alexandre Lachèze', member: false, picture: 'https://dgivdslhqe3qo.cloudfront.net/careers/members/15763/thumb_avatar_1558702855.png' },
        { name: 'Mikaël Atier', member: false, picture: 'https://dgivdslhqe3qo.cloudfront.net/careers/members/12182/thumb_avatar_1558702845.png' },
        { name: 'Julien Berthomier', member: true, picture: 'https://dgivdslhqe3qo.cloudfront.net/careers/members/15766/thumb_avatar_1558702979.png' },
        { name: 'Joël Charles', member: false, picture: 'https://dgivdslhqe3qo.cloudfront.net/careers/members/12181/thumb_avatar_1558702850.png' },
        { name: 'Mathias D', member: false, picture: 'https://dgivdslhqe3qo.cloudfront.net/careers/members/17076/thumb_avatar_1567069484.jpg' },
    ]
}

const theme : any = {
    container: {
        position: 'relative'
    },
    input: {
        display: 'block',
        appearance: 'none',
        border: '1px solid rgba(41, 41, 41, 0.1)',
        padding: '0px 15px',
        boxSizing: 'border-box',
        borderRadius: 30,
        minWidth: 200,
        width: '100%',
        height: 34,
        lineHeight: '34px',
        fontSize: 11,
        fontWeight: 500,
        transition: 'all 250ms ease-out',
        color: '#292929',
        backgroundColor: '#FFFFFF',
    },
    inputFocused: {
        outline: 'none'
    },
    inputOpen: {
    },
    suggestionsContainer: {
        display: 'none'
    },
    suggestionsContainerOpen: {
        display: 'block',
        position: 'absolute',
        top: 37,
        minWidth: 200,
        width: '100%',
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
        backgroundColor: '#4f94f8'
    },
};

const styles = {
    roundPicture: {
        margin: '0 8px 0 5px',
    },
    suggestionContent: {
    },
    renderTag: {
        listStyleType: 'none',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: '5px 5px 5px 0',
        fontFamily: 'Helvetica, sans-serif',
        fontSize: 13,
        '&:last-of-type': {
            marginBottom: 10,
        }
    },
    renderTagRoundPicture: {
        marginRight: 13,
    },
    renderTagContent: {
        flex: 1,
    },
    renderTagRemove: {
    },
};

interface OwnProps {
}

interface State {
    tags: any,
}

type Props = OwnProps & WithSheet<IgnoreJSSNested<typeof styles>, {}> & React.HTMLProps<HTMLInputElement>;

class InputTagsImpl extends React.Component<Props, State> {
    constructor (props: Props) {
        super(props);
        this.state = {
            tags: []
        };
    }

    handleChange (tags: any) {
        this.setState({tags})
    }

    renderSuggestion = (suggestion: any) => {
        const { classes } = this.props;
        return (
            <>
                <Icon symbolId={IconSymbol.HINT} color={suggestion.member ? 'gray' : 'transparent'} size={10}/>
                <RoundPicture
                    className={classes.roundPicture}
                    item={suggestion}
                    size={22}
                    borderColor="transparent"
                />
                <div className={classes.suggestionContent}>{suggestion.name}</div>
            </>
        );
    };

    autocompleteRenderInput = ({addTag, ...props}: any) => {
        const handleOnChange = (e: any, {newValue, method}: any) => {
            if (method === 'enter') {
                e.preventDefault()
            } else {
                props.onChange(e)
            }
        };

        const inputValue = (props.value && props.value.trim().toLowerCase()) || '';
        const inputLength = inputValue.length;

        let suggestions = states().filter((state) => {
            return state.name.toLowerCase().slice(0, inputLength) === inputValue
        });

        const inputProps = {
            ...props,
            onChange: handleOnChange,
            placeholder: 'Search members from your organization',
        };

        return (
            <Autosuggest
                ref={props.ref}
                suggestions={suggestions}
                shouldRenderSuggestions={(value) => (value && value.trim().length > 0) as boolean}
                getSuggestionValue={(suggestion) => suggestion.name}
                renderSuggestion={this.renderSuggestion}
                inputProps={inputProps}
                onSuggestionSelected={(e, {suggestion}) => {
                    addTag(suggestion.name)
                }}
                onSuggestionsClearRequested={() => {}}
                onSuggestionsFetchRequested={() => {}}
                theme={theme}
            />
        )
    };

    render () {
        function renderTag(props: Props, renderTagsProps: any) {
            const { classes } = props;
            const { tag, key, disabled, onRemove, getTagDisplayValue, ...other } = renderTagsProps;
            return (
                <li key={key} {...other} className={classes.renderTag}>
                    <RoundPicture
                        className={classes.renderTagRoundPicture}
                        item={states()[0]}
                        size={22}
                        borderColor="transparent"
                    />
                    <div className={classes.renderTagContent}>{getTagDisplayValue(tag)}</div>
                    {!disabled &&
                        <a className={classes.renderTagRemove} onClick={(e) => onRemove(key)}>
                            <Icon symbolId={IconSymbol.CROSS} color={'gray'} size={20} />
                        </a>
                    }
                </li>
            )
        }

        return <TagsInput
            renderInput={this.autocompleteRenderInput}
            renderTag={(renderTagsProps: any) => renderTag(this.props, renderTagsProps)}
            value={this.state.tags}
            onChange={this.handleChange.bind(this)}
        />
    }
}

export const InputTags = injectSheet(styles as IgnoreJSSNested<typeof styles>)(InputTagsImpl);

