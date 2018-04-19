import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Grid from '../src/components/Grid/Grid';
// Styles
import '../node_modules/doslotos-grid/dist/doslotos-grid.css';

storiesOf('Grid', module)
  .add('Full Grid', () => (
    <Grid isFluid>
      <Grid.Row>
        <div style={{ width: '100px', height: '300px', backgroundColor: 'red', margin: '10px' }}>1</div>
        <div style={{ width: '100px', height: '300px', backgroundColor: 'red', margin: '10px' }}>2</div>
        <div style={{ width: '100px', height: '300px', backgroundColor: 'red', margin: '10px' }}>3</div>
      </Grid.Row>
    </Grid>
  ))