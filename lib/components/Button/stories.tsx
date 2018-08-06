import { Button, Size, Style } from './index';
import centered from '@storybook/addon-centered';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

storiesOf('Atoms|Button', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add('Normal Primary',
    withInfo({ text: 'Button Normal Primary' })(
      withNotes('Button - Normal Primary')(
        () => (
          <div>
            <Button btnSize={Size.BIG} btnStyle={Style.PRIMARY}>Big Button</Button>
            <Button btnSize={Size.NORMAL} btnStyle={Style.PRIMARY}>Normal Button</Button>
            <Button btnSize={Size.SMALL} btnStyle={Style.PRIMARY}>Small Button</Button>
            <Button btnSize={Size.XSMALL} btnStyle={Style.PRIMARY}>XSmall Button</Button>
            <Button btnSize={Size.XXSMALL} btnStyle={Style.PRIMARY}>XXSmall Button</Button>
          </div>
        )
      )))
  .add('Normal Secondary',
    withInfo({ text: 'Button Normal Secondary' })(
      withNotes('Button - Normal Secondary')(
        () => (
          <div>
            <Button btnSize={Size.BIG} btnStyle={Style.SECONDARY}>Big Button</Button>
            <Button btnSize={Size.NORMAL} btnStyle={Style.SECONDARY}>Normal Button</Button>
            <Button btnSize={Size.SMALL} btnStyle={Style.SECONDARY}>Small Button</Button>
            <Button btnSize={Size.XSMALL} btnStyle={Style.SECONDARY}>XSmall Button</Button>
            <Button btnSize={Size.XXSMALL} btnStyle={Style.SECONDARY}>XXSmall Button</Button>
          </div>
        )
      )));
