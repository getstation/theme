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
  .add('Modal with buttons and App icon and InputTags', () => (
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
      <div>
        {text('Content', 'Content of the modal with buttons and Application icon')}

        <InputTags
          items={[
              { name: 'Guillaume Arm', selected: false, picture: 'https://dgivdslhqe3qo.cloudfront.net/careers/members/15768/thumb_avatar_1558702997.png' },
              { name: 'Hugo Mano', selected: true, picture: 'https://dgivdslhqe3qo.cloudfront.net/careers/members/15767/thumb_avatar_1558702986.png' },
              { name: 'Maud Miguet', selected: true, picture: 'https://dgivdslhqe3qo.cloudfront.net/careers/members/15764/thumb_avatar_1558702913.png' },
              { name: 'Alexandre Lachèze', selected: false, picture: 'https://dgivdslhqe3qo.cloudfront.net/careers/members/15763/thumb_avatar_1558702855.png' },
              { name: 'Mikaël Atier', selected: true, picture: 'https://dgivdslhqe3qo.cloudfront.net/careers/members/12182/thumb_avatar_1558702845.png' },
              { name: 'Julien Berthomier', selected: false, picture: 'https://dgivdslhqe3qo.cloudfront.net/careers/members/15766/thumb_avatar_1558702979.png' },
              { name: 'Joël Charles', selected: false, picture: 'https://dgivdslhqe3qo.cloudfront.net/careers/members/12181/thumb_avatar_1558702850.png' },
              { name: 'Mathias D', selected: false, picture: 'https://dgivdslhqe3qo.cloudfront.net/careers/members/17076/thumb_avatar_1567069484.jpg' },
          ]}
          onUpdateTags={action('onUpdateTags')}
        />
      </div>
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
