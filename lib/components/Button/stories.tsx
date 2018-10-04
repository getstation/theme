import { Button, Size, Style } from './index';
import centered from '@storybook/addon-centered';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

storiesOf('Atoms|Button', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add('All buttons',
    withInfo({ text: 'All buttons' })(
      withNotes('All buttons  ')(
        () => {
          const primaryContent = text('primary button content', 'Primary Button');
          const secondaryContent = text('secondary button content', 'Secondary Button');
          const tertiaryContent = text('tertiary button content', 'Tertiary Button');
          const linkContent = text('link button content', 'Link Button');
          const dangerContent = text('danger button content', 'Danger Button');
          const style = { marginLeft: '10px' };
          return (
            <div>
              <h4>XXSMALL Button</h4>
              <div>
                <Button style={style} btnSize={Size.XXSMALL} btnStyle={Style.PRIMARY}>
                  {primaryContent}
                </Button>
                <Button style={style} btnSize={Size.XXSMALL} btnStyle={Style.SECONDARY}>
                  {secondaryContent}
                </Button>
                <Button style={style} btnSize={Size.XXSMALL} btnStyle={Style.TERTIARY}>
                  {tertiaryContent}
                </Button>
                <Button style={style} btnSize={Size.XXSMALL} btnStyle={Style.LINK}>
                  {linkContent}
                </Button>
                <Button style={style} btnSize={Size.XXSMALL} btnStyle={Style.DANGER}>
                  {dangerContent}
                </Button>
              </div>
              <h4>XSMALL Button</h4>
              <div>
                <Button style={style} btnSize={Size.XSMALL} btnStyle={Style.PRIMARY}>
                  {primaryContent}
                </Button>
                <Button style={style} btnSize={Size.XSMALL} btnStyle={Style.SECONDARY}>
                  {secondaryContent}
                </Button>
                <Button style={style} btnSize={Size.XSMALL} btnStyle={Style.TERTIARY}>
                  {tertiaryContent}
                </Button>
                <Button style={style} btnSize={Size.XSMALL} btnStyle={Style.LINK}>
                  {linkContent}
                </Button>
                <Button style={style} btnSize={Size.XSMALL} btnStyle={Style.DANGER}>
                  {dangerContent}
                </Button>
              </div>
              <h4>SMALL Button</h4>
              <div>
                <Button style={style} btnSize={Size.SMALL} btnStyle={Style.PRIMARY}>
                  {primaryContent}
                </Button>
                <Button style={style} btnSize={Size.SMALL} btnStyle={Style.SECONDARY}>
                  {secondaryContent}
                </Button>
                <Button style={style} btnSize={Size.SMALL} btnStyle={Style.TERTIARY}>
                  {tertiaryContent}
                </Button>
                <Button style={style} btnSize={Size.SMALL} btnStyle={Style.LINK}>
                  {linkContent}
                </Button>
                <Button style={style} btnSize={Size.SMALL} btnStyle={Style.DANGER}>
                  {dangerContent}
                </Button>
              </div>
              <h4>NORMAL Button</h4>
              <div>
                <Button style={style} btnSize={Size.NORMAL} btnStyle={Style.PRIMARY}>
                  {primaryContent}
                </Button>
                <Button style={style} btnSize={Size.NORMAL} btnStyle={Style.SECONDARY}>
                  {secondaryContent}
                </Button>
                <Button style={style} btnSize={Size.NORMAL} btnStyle={Style.TERTIARY}>
                  {tertiaryContent}
                </Button>
                <Button style={style} btnSize={Size.NORMAL} btnStyle={Style.LINK}>
                  {linkContent}
                </Button>
                <Button style={style} btnSize={Size.NORMAL} btnStyle={Style.DANGER}>
                  {dangerContent}
                </Button>
              </div>
              <h4>BIG Button</h4>
              <div>
                <Button style={style} btnSize={Size.BIG} btnStyle={Style.PRIMARY}>
                  {primaryContent}
                </Button>
                <Button style={style} btnSize={Size.BIG} btnStyle={Style.SECONDARY}>
                  {secondaryContent}
                </Button>
                <Button style={style} btnSize={Size.BIG} btnStyle={Style.TERTIARY}>
                  {tertiaryContent}
                </Button>
                <Button style={style} btnSize={Size.BIG} btnStyle={Style.LINK}>
                  {linkContent}
                </Button>
                <Button style={style} btnSize={Size.BIG} btnStyle={Style.DANGER}>
                  {dangerContent}
                </Button>
              </div>
            </div>
          );
        }
      )));
