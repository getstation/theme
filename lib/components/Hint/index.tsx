import * as React from 'react';
// @ts-ignore: no declaration file
import injectSheet from 'react-jss';
import {Icon, IconSymbol} from "../Icon";
import Tooltip from "../Tooltip";

export enum STYLE {
    LIGHT, DARK,
}

interface Classes {
}

interface Props {
    classes?: Classes,
    tooltip: string;
    style?: STYLE,
    size?: number,
}

@injectSheet(() => ({
}))
export default class Hint extends React.PureComponent<Props, {}> {
    static defaultProps = {
        style: STYLE.LIGHT,
        size: 20,
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
        const { tooltip, style, size } = this.props;

        return (
            <Tooltip tooltip={tooltip}>
                <Icon symbolId={IconSymbol.HINT} color={this.style[style!]} size={size}/>
            </Tooltip>
        );
    }
}
