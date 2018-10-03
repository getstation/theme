import { Button, Size, Style } from './index';
import centered from '@storybook/addon-centered';
import { withInfo } from '@storybook/addon-info';
import { select, text, withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

storiesOf('Atoms|Button', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add('Buttons',
    withInfo({ text: 'Button Normal Primary' })(
      withNotes('Button - Normal Primary')(
        () => (
          <div>
            <Button
              btnSize={select('Button size', Size, Size.NORMAL)}
              btnStyle={select('Button style', Style, Style.PRIMARY)}
            >
              {text('Content', 'Button')}
            </Button>
          </div>
        )
      )));
