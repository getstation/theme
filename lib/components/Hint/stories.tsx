import { withInfo } from '@storybook/addon-info';
import {select, withKnobs} from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Hint, {STYLE} from './index';

const containerStyle = {
    width: 40,
    height: 40,
    backgroundColor: '#0E3255',
};

const story = storiesOf('Components/Hint', module);

story
    .addDecorator(withKnobs)
    .add('Hint',
        withInfo({ text: 'Hint' })(
            withNotes('A very simple component')(
                () => {
                    const style = select('Style', STYLE, STYLE.LIGHT);

                    return (
                        <div style={containerStyle}>
                            <Hint tooltip="This is a hint" style={style} size={40} />
                        </div>
                    )
                }
            )));
