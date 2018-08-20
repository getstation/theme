import { action } from '@storybook/addon-actions';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Modal from './index';

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
  .add('Modal with buttons', () => (
    <Modal
      title={text('Title', 'My modal')}
      description={text('Description', 'My awesome modal here')}
      onCancel={action('cancel')}
      onContinue={action('continue')}
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
      applicationIcon={text('applicationIcon', 'https://pbs.twimg.com/profile_images/959451316903845889/BpKfHFc4_400x400.jpg')}
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
      applicationIcon={text('applicationIcon', 'https://pbs.twimg.com/profile_images/959451316903845889/BpKfHFc4_400x400.jpg')}
      isLoading={boolean('isLoading', true)}
    >
      {text('Content', 'Content of the modal with buttons and Application icon')}
    </Modal>
  ));
