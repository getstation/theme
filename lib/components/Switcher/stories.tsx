import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import {boolean, select, withKnobs} from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Switcher, {TEXT} from './index';
import {STYLE} from "../Hint";

const containerStyle = {
    width: 200,
    height: 50,
    padding: '5px 0',
    backgroundColor: '#0E3255',
};

const story = storiesOf('Components/Switcher', module);

story
  .addDecorator(withKnobs)
  .add('Switcher',
    withInfo({ text: 'Switcher' })(
      withNotes('A very simple component')(
        () => {
            const text = select('Text', TEXT, TEXT.ON_OFF);

            return (
                <div style={containerStyle}>
                    <Switcher
                        checked={boolean('checked', true)}
                        onChange={action('onChange')}
                        text={text}
                    />
                </div>
            )
        }
      )));
