import centered from '@storybook/addon-centered';
import { withInfo } from '@storybook/addon-info';
import { text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
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
                )
            )));