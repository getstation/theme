import { withInfo } from '@storybook/addon-info';
import {select, text, withKnobs} from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import PopperJS from 'popper.js';
import { Tooltip } from './index';
import {Icon, IconSymbol} from "../Icon";

const containerStyle = {
    width: 40,
    height: 40,
    backgroundColor: '#0E3255',
};

const story = storiesOf('Components|Tooltip', module);

story
    .addDecorator(withKnobs)
    .add('Tooltip',
        withInfo({ text: 'Tooltip' })(
            withNotes('A very simple component')(
                () => {
                    const tooltip = text('Tooltip', 'This is a tooltip');
                    // const placement = text('Placement', 'auto'); TODO: fix type issues with PopperJS.Placement
                    const offset = text('Offset', '0, 0, 0, 0');

                    return (
                        <div style={containerStyle}>
                            <Tooltip tooltip={tooltip} offset={offset}>
                                <Icon symbolId={IconSymbol.BELL} color={'#FFF'} size={40}/>
                            </Tooltip>
                        </div>
                    )
                }
            )));
