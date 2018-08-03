import { Button, Size, Style } from './index';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

const story = storiesOf('Components|Button', module);

story
  .addDecorator(withKnobs)
  .add('Button',
    withInfo({ text: 'Button Normal' })(
      withNotes('Button - Normal style')(
        () =>
          <div>
            <div>
              <Button btnSize={Size.BIG} btnStyle={Style.PRIMARY}>Big Button</Button>
              <Button btnSize={Size.NORMAL} btnStyle={Style.PRIMARY}>Normal Button</Button>
              <Button btnSize={Size.SMALL} btnStyle={Style.PRIMARY}>Small Button</Button>
              <Button btnSize={Size.XSMALL} btnStyle={Style.PRIMARY}>XSmall Button</Button>
              <Button btnSize={Size.XXSMALL} btnStyle={Style.PRIMARY}>XXSmall Button</Button>
            </div>

            <div style={{ backgroundColor: '#507DA2' }}>
              <Button btnSize={Size.BIG} btnStyle={Style.SECONDARY}>Big Button</Button>
              <Button btnSize={Size.NORMAL} btnStyle={Style.SECONDARY}>Normal Button</Button>
              <Button btnSize={Size.SMALL} btnStyle={Style.SECONDARY}>Small Button</Button>
              <Button btnSize={Size.XSMALL} btnStyle={Style.SECONDARY}>XSmall Button</Button>
              <Button btnSize={Size.XXSMALL} btnStyle={Style.SECONDARY}>XXSmall Button</Button>
            </div>
          </div>
      )));
