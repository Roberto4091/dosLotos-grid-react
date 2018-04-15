import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

storiesOf('Example', module)
  .add('with text', () => (
    <a onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></a>
  ))