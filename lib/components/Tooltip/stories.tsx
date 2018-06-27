import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Tooltip from './index';
import {Icon, IconSymbol} from "../Icon";

const containerStyle = {
    width: 40,
    height: 40,
    backgroundColor: '#0E3255',
};

const story = storiesOf('Components/Tooltip', module);

story
    .addDecorator(withKnobs)
    .add('Tooltip',
        withInfo({ text: 'Tooltip' })(
            withNotes('A very simple component')(
                () =>
                    <div style={containerStyle}>
                        <Tooltip tooltip={'Here is a tooltip'}>
                            <Icon symbolId={IconSymbol.BELL} color={'#FFF'} size={40}/>
                        </Tooltip>
                    </div>
            )));
