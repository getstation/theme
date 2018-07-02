import * as React from 'react';
// @ts-ignore: no declaration file
import injectSheet from 'react-jss';
import {Icon, IconSymbol} from "../Icon";
import { Tooltip } from "../Tooltip";

export enum STYLE {
    LIGHT, DARK,
}

interface Classes {
    container: string,
    tooltip: string,
    hint: string,
}

interface Props {
    classes?: Classes,
    tooltip: string;
    style?: STYLE,
    size?: number,
    children: any,
}

@injectSheet(() => ({
    container: {
        display: 'inline-flex',
        alignItems: 'center',
    },
    tooltip: {
        marginLeft: 5,
    },
    hint: {
        width: 'initial',
        maxWidth: 250,
    }
}))
export class Hint extends React.PureComponent<Props, {}> {
    static defaultProps = {
        style: STYLE.LIGHT,
        size: 15,
    };

    style: Object;

    constructor(props: Props) {
        super(props);

        this.style = {
            [STYLE.LIGHT]: 'rgba(255, 255, 255, .5)',
            [STYLE.DARK]: 'rgba(0, 0, 0, .5)',
        }
    }

    render() {
        const { classes, tooltip, style, size, children } = this.props;

        return (
            <div className={classes!.container}>
                <div>
                    { children }
                </div>
                <Tooltip className={classes!.tooltip} tooltip={tooltip} hintClassname={classes!.hint}>
                    <Icon symbolId={IconSymbol.HINT} color={this.style[style!]} size={size}/>
                </Tooltip>
            </div>
        );
    }
}
