import centered from '@storybook/addon-centered';
import { withInfo } from '@storybook/addon-info';
import { object, text, withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import * as React from 'react';
import { InputList } from './index';
import { Modal } from '../Modal';

const renderInputList = () => (
  <InputList
    items={object('data', [
      { id: '0', name: 'Guillaume Arm', selected: false, picture: 'https://dgivdslhqe3qo.cloudfront.net/careers/members/15768/thumb_avatar_1558702997.png' },
      { id: '1', name: 'Hugo Mano', selected: true, picture: 'https://dgivdslhqe3qo.cloudfront.net/careers/members/15767/thumb_avatar_1558702986.png' },
      { id: '2', name: 'Maud Miguet', selected: true, picture: 'https://dgivdslhqe3qo.cloudfront.net/careers/members/15764/thumb_avatar_1558702913.png' },
      { id: '3', name: 'Alexandre Lachèze', selected: false, picture: 'https://dgivdslhqe3qo.cloudfront.net/careers/members/15763/thumb_avatar_1558702855.png' },
      { id: '4', name: 'Mikaël Atier', selected: true, picture: 'https://dgivdslhqe3qo.cloudfront.net/careers/members/12182/thumb_avatar_1558702845.png' },
      { id: '5', name: 'Julien Berthomier', selected: false, picture: 'https://dgivdslhqe3qo.cloudfront.net/careers/members/15766/thumb_avatar_1558702979.png' },
      { id: '6', name: 'Joël Charles', selected: false, picture: 'https://dgivdslhqe3qo.cloudfront.net/careers/members/12181/thumb_avatar_1558702850.png' },
      { id: '7', name: 'Mathias D', selected: false, picture: 'https://dgivdslhqe3qo.cloudfront.net/careers/members/17076/thumb_avatar_1567069484.jpg' },
    ])}
  />
);

storiesOf('Molecules|InputList', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add('Input List',
    withInfo({ text: 'Input List' })(
      withNotes('Input List - Base')(
        () => (
          renderInputList()
        )
      )))
  .add('Input List in a Modal', () => (
    <Modal
      title={text('Title', 'My modal')}
      onCancel={action('cancel')}
      onContinue={action('continue')}
    >
      <div>
        <p>{text('Content', 'Content of the modal with an InputList.')}</p>
        <div>{ renderInputList() }</div>
      </div>
    </Modal>
  ));