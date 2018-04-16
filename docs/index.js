import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import H1 from '../src/components/H1/H1';

storiesOf('Example', module)
  .add('with text', () => (
    <H1 text="😀 😎 👍 💯" />
  ))