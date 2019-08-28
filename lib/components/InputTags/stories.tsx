import centered from '@storybook/addon-centered';
import { withInfo } from '@storybook/addon-info';
import { text, withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { InputTags } from './index';

storiesOf('Molecules|InputTags', module)
    .addDecorator(withKnobs)
    .addDecorator(centered)
    .add('Input Tags',
        withInfo({ text: 'Input Tags' })(
            withNotes('Input Tags')(
                () => (
                    <InputTags />
                )
            )));