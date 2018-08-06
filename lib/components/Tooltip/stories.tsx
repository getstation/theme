import centered from '@storybook/addon-centered';
import { withInfo } from '@storybook/addon-info';
import {text, withKnobs} from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { storiesOf } from '@storybook/react';
// import PopperJS from 'popper.js';
import * as React from 'react';
import { Tooltip } from './index';
import {Icon, IconSymbol} from "../Icon";

storiesOf('Atoms|Tooltip', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add('Tooltip',
    withInfo({ text: 'Tooltip' })(
      withNotes('A very simple component')(
        () => {
          const tooltip = text('Tooltip', 'This is a tooltip');
          // const placement = text('Placement', 'auto'); TODO: fix type issues with PopperJS.Placement
          const offset = text('Offset', '0, 0, 0, 0');

          return (
            <Tooltip tooltip={tooltip} offset={offset}>
              <Icon symbolId={IconSymbol.BELL} color={'#FFF'} size={40}/>
            </Tooltip>
          )
        }
      )));
