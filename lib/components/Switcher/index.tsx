import classNames = require('classnames');
import * as React from 'react';
// @ts-ignore: no declaration file
import injectSheet from 'react-jss';
import * as shortid from 'shortid';

export enum TEXT {
    ON_OFF,
    YES_NO,
}

interface Classes {
    switcher: string,
    toggle: string,
    button: string,
    content: string,
    viewport: string,
    contentLeft: string,
    contentRight: string,
}

interface Props {
    classes?: Classes,
    checked: boolean,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => any,
    text?: TEXT,
}

const styles = () => {
    const transition = {
        transition: 'all 500ms ease-in-out',
    };

    return ({
        switcher: {
            display: 'flex',
            height: '100%',
            position: 'relative',
            width: '200%',
            ...transition,
        },
        button: {
            backgroundSize: '100%',
            background: '#C9C9C9',
            boxSizing: 'border-box',
            position: 'absolute',
            top: '4px',
            left: '47px',
            width: '12px',
            height: '12px',
            cursor: 'pointer',
            borderRadius: '100%',
            ...transition,
        },
        content: {
            background: 'rgba(157, 38, 29, 0.5)',
            cursor: 'pointer',
            display: 'inline-block',
            float: 'left',
            height: '100%',
            width: '64px',
            fontSize: '9px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            top: '10px',
            ...transition,
            '& span': {
                height: '100%',
                lineHeight: '20px',
                float: 'left',
            },
        },
        contentLeft: {
            backgroundImage: 'linear-gradient(180deg, #213655 0%, #385679 34.24%, #4A7496 79.87%, #7272A0 100%)',
            backgroundSize: '100%',
            '& span': {
                marginRight: '20px',
                float: 'right',
            },
        },
        contentRight: {
            backgroundColor: 'white',
            color: '#C9C9C9',
            backgroundSize: '100%',
            '& span': {
                marginLeft: '18px',
            },
        },
        viewport: {
            display: 'block',
            width: '44px',
            height: '19px',
            overflow: 'hidden',
            position: 'relative',
            cursor: 'pointer',
            borderRadius: '40px',
            color: '#fff',
            float: 'right',
            userSelect: 'none',
            border: '1px solid #EEE',
        },
        toggle: {
            display: 'none',
            visibility: 'hidden',
            '& + $viewport > $switcher': {
                left: '-100%',
            },
            '& + $viewport > $button': {
                left: '47px',
            },
            '& + $viewport > $content': {
                left: '65px',
            },
            '& + $viewport > $contentLeft': {
                marginLeft: 0,
            },
            '&:checked + $viewport > $switcher': {
                left: 0,
            },
            '&:checked + $viewport $button': {
                left: '27px',
                color: 'white',
                backgroundColor: 'white',
            },
            '&:checked + $viewport $contentLeft': {
                marginLeft: 0,
            },
            '&:checked + $viewport $contentRight > span': {
                margin: '-1px 4px',
            },
        },
    });
};
@injectSheet(styles)
export class Switcher extends React.PureComponent<Props, {}> {
    static defaultProps = {
        text: TEXT.ON_OFF,
    };

    inputId: string;
    values: any;

    constructor(props: Props) {
        super(props);
        this.inputId = `switcher-input-${shortid.generate()}`;
        this.values = {
            [TEXT.ON_OFF]: {0: 'off', 1: 'on'},
            [TEXT.YES_NO]: {0: 'no', 1: 'yes'},
        }
    }

    render() {
        const { classes, checked, onChange, text } = this.props;

        const values = this.values[text!];

        return (
            <div>
                <input
                    type="checkbox"
                    id={this.inputId}
                    className={classes!.toggle}
                    checked={checked}
                    onChange={onChange}
                />
                <label className={classes!.viewport} htmlFor={this.inputId}>
                    <div className={classes!.switcher}>
                        <div className={classes!.button}>&nbsp;</div>
                        <div className={classNames(classes!.content, classes!.contentLeft)}><span>{values[1]}</span></div>
                        <div className={classNames(classes!.content, classes!.contentRight)}><span>{values[0]}</span></div>
                    </div>
                </label>
            </div>
        );
    }
}
