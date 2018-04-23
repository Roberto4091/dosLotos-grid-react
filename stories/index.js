import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Container from '../src/components/Grid/Container';
import Grid from '../src/components/Grid/Grid';
// Styles
import '../node_modules/doslotos-grid/dist/doslotos-grid.css';

storiesOf('Grid', module)
  .add('Full Grid', () => (
    <Grid>
      <Grid.Col xxs={{ xxs: 5, order: 2, offset: 1 }}>
        <p>dddddd</p>
      </Grid.Col>
    </Grid>
  ))