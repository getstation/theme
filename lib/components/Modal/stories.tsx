import { action } from '@storybook/addon-actions';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Modal } from './index';
import {InputTags} from "../InputTags";

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' +
  ' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
  ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi' +
  ' ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit' +
  ' in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur' +
  ' sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt' +
  ' mollit anim id est laborum.';

storiesOf('Molecules|Modal', module)
  .addDecorator(withKnobs)
  .add('Modal', () => (
    <Modal
      title={text('Title', 'My modal')}
      description={text('Description', 'My awesome modal here')}
      onCancel={action('cancel')}
    >
      {text('Content', 'Content of the modal')}
    </Modal>
  ))
  .add('Modal with long description', () => (
    <Modal
      title={text('Title', 'My modal')}
      description={text(
        'Description',
        `My awesome modal here: this is a long long long long long long long description`,
      )}
      onCancel={action('cancel')}
    >
      {text('Content', `Content of the modal: ${loremIpsum}. ${loremIpsum}`)}
    </Modal>
  ))
  .add('Modal with buttons', () => (
    <Modal
      title={text('Title', 'My modal')}
      description={text('Description', 'My awesome modal here')}
      onCancel={action('cancel')}
      onContinue={action('continue')}
      continueDanger={boolean('continueDanger', false)}
      continueContent={text('continueContent', '')}
    >
      {text('Content', 'Content of the modal with action buttons')}
    </Modal>
  ))
  .add('Modal with buttons and App icon', () => (
    <Modal
      title={text('Title', 'My modal')}
      description={text('Description', 'My awesome modal here')}
      onCancel={action('cancel')}
      onContinue={action('continue')}
      applicationIcon={text(
        'applicationIcon',
        'https://dl.airtable.com/GFscY2CMS6WaaWzOrjlT_provider-svg-gmail.svg',
      )}
      themeColor={text('themeColor', '#ABCDEF')}
      continueDanger={boolean('continueDanger', false)}
      continueContent={text('continueContent', '')}
    >
      {text('Content', 'Content of the modal with buttons and Application icon')}
    </Modal>
  ))
  .add('Modal - loading state', () => (
    <Modal
      title={text('Title', 'My modal')}
      description={text('Description', 'My awesome modal here')}
      onCancel={action('cancel')}
      onContinue={action('continue')}
      applicationIcon={text(
        'applicationIcon',
        'https://dl.airtable.com/GFscY2CMS6WaaWzOrjlT_provider-svg-gmail.svg',
      )}
      themeColor={text('themeColor', '#ABCDEF')}
      isLoading={boolean('isLoading', true)}
      continueDanger={boolean('continueDanger', false)}
      continueContent={text('continueContent', '')}
    >
      {text('Content', 'Content of the modal with buttons and Application icon')}
    </Modal>
  ));
