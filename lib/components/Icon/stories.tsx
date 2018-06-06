import { CSSProperties } from 'react';
import { Icon, IconSymbol } from './index';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
// import DockNavigationButtons from '../../app/dock-navigation/components/DockNavigationButtons';
// import NativeAppDockIcon from '../../app/dock/components/NativeAppDockIcon';

const containerStyle = {
  width: 50,
  height: '100%',
  padding: '5px 0',
  backgroundColor: '#0E3255',
};

const OSBarStyle = {
  width: '100%',
  height: 20,
  backgroundColor: '#0E3255',
};

const iconContainerStyle : CSSProperties = {
  display: 'inline-flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#EEE',
  margin: 10,
  width: 200,
  height: 200,
};

const iconWrapperStyle = {
  border: '1px solid gray',
};

const story = storiesOf('Components/Icon', module);

story
  .addDecorator(withKnobs)
  .add('NativeAppDockIcon',
    withInfo({ text: 'NativeAppDockIcon' })(
      withNotes('A very simple component')(
        () =>
          <div style={containerStyle}>
            {/*<NativeAppDockIcon
              tooltip={'Tooltip text'}
              iconSymbolId={IconSymbol.FOCUS}
              onClick={action('clicked')}
              disabled={boolean('disabled')}
              isSnoozed={boolean('isSnoozed', false)}
              syncWithOS={boolean('syncWithOS', false)}
            />*/}
          </div>
      )))
  .add('Dock Navigation Buttons',
    withInfo({ text: 'This is the Back & Forth Icon component' })(
      withNotes('This icon is a set of two icons')(
        () =>
          <div style={containerStyle}>
            {/*<DockNavigationButtons
              canGoBack={boolean('canGoBack', true)}
              canGoForward={boolean('canGoForward', true)}
              onGoBack={action('go back')}
              onGoForward={action('go forward')}
            />
            <NativeAppDockIcon
              tooltip={'Quick Switch'}
              iconSymbolId={IconSymbol.SEARCH}
              onClick={action('clicked')}
              disabled={boolean('disabled')}
            />*/}
          </div>
      )))
  .add('Dock Navigation Buttons OSBar',
    withInfo({ text: 'This is the Back & Forth Icon component' })(
      withNotes('This icon is a set of two icons')(
        () =>
          <div style={OSBarStyle}>
            {/*<DockNavigationButtons
              canGoBack={boolean('canGoBack', true)}
              canGoForward={boolean('canGoForward', true)}
              onGoBack={action('go back')}
              onGoForward={action('go forward')}
            />*/}
          </div>
      )))
  .add('All icons', () =>
    <div>
      {
        Object.keys(IconSymbol).map(symbol =>
          <div style={iconContainerStyle}>
            <div style={iconWrapperStyle}>
              <Icon key={symbol} symbolId={IconSymbol[symbol]} color={'#000'} size={48}/>
            </div>
            <pre>{ IconSymbol[symbol] }</pre>
          </div>
        )
      }
    </div>
  );

Object.keys(IconSymbol).map(symbol =>
  storiesOf('Components/Icon/icon', module).add(IconSymbol[symbol], () =>
    <div>
      <h1>Icon: {symbol}</h1>
      <div style={iconContainerStyle}>
        <div style={iconWrapperStyle}>
          <Icon key={symbol} symbolId={IconSymbol[symbol]} color={'#000'} size={48}/>
        </div>
        <pre>{ IconSymbol[symbol] }</pre>
      </div>

      <div style={containerStyle}>
        {/*<NativeAppDockIcon
          tooltip={IconSymbol[symbol]}
          iconSymbolId={IconSymbol[symbol]}
          onClick={action('clicked')}
          disabled={boolean('disabled')}
        />*/}
      </div>
    </div>
  )
);