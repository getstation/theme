import PopperJS from 'popper.js';
import * as React from 'react';
// @ts-ignore: no declaration file
import ReactHoverObserver from 'react-hover-observer';
import injectSheet, { WithSheet } from 'react-jss';
import { Manager, Popper, Target } from 'react-popper';
import classNames = require('classnames');

interface OwnProps {
    className?: string,
    tooltip?: string,
    placement?: PopperJS.Placement,
    offset?: string,
    hintClassname?: string,
}

interface State {
    isHovering: boolean,
    tooltipShown: boolean,
}

const styles = {
  hint: {
    width: 137,
    margin: [0, 0, 0, 2] as any,
    padding: [5, 10, 6] as any,
    fontSize: 11,
    fontWeight: 700,
    textAlign: 'center' as 'center',
    color: '#FFF',
    backgroundColor: '#333',
    borderRadius: 2,
  },
};

type Props = OwnProps & WithSheet<typeof styles, {}>;

class TooltipImpl extends React.PureComponent<Props, State> {

    static defaultProps = {
        placement: 'right' as PopperJS.Placement,
        offset: '0, 2',
    };

    constructor(props: Props) {
        super(props);
        this.state = {
            isHovering: false,
            tooltipShown: false,
        };
        this.handleHoverChanged = this.handleHoverChanged.bind(this);
    }

    componentWillReceiveProps(nextProps: Props) {
        const tooltipShown = Boolean(nextProps.tooltip && !this.props.tooltip);

        if (tooltipShown) {
            this.setState({ tooltipShown: true });
            return;
        }

        if (!tooltipShown && !this.state.isHovering) {
            this.setState({ tooltipShown: false });
            return;
        }
    }

    handleHoverChanged({ isHovering }: { isHovering: boolean }) {
        this.setState({ isHovering });

        if (!isHovering && this.state.tooltipShown) {
            this.setState({ isHovering: false, tooltipShown: false });
        }
    }

    render() {
        const { children, tooltip, placement, classes, offset, hintClassname } = this.props;

        return (
            <Manager className={this.props.className}>
                <Target>
                    <ReactHoverObserver
                        hoverDelayInMs={500}
                        onHoverChanged={this.handleHoverChanged}
                        shouldDecorateChildren={false}
                    >
                        {children}
                    </ReactHoverObserver>
                </Target>
                {!this.state.tooltipShown && tooltip && this.state.isHovering &&
                <Popper
                    placement={placement}
                    modifiers={{
                        preventOverflow: { enabled: true, boundariesElement: 'viewport' },
                        offset: { offset },
                    }}
                >
                    <div className={classNames(classes.hint, hintClassname)}>
                        {tooltip}
                    </div>
                </Popper>
                }
            </Manager>
        );
    }
}

export const Tooltip = injectSheet(styles)(TooltipImpl);
