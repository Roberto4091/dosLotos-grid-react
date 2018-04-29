import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Container, Grid, Col, Row } from '../src/components/Grid';
// Styles
import '../node_modules/doslotos-grid/dist/doslotos-grid.css';
// Custom styles
const styles = {
  background: '#f2f2f2',
  border: '1px solid #CCC',
  textAlign: 'center',
}

storiesOf('Grid', module)
  .add('Full Grid', () => (
    <Container>
      <Grid>
        <Row>
          <Col xs={4} sm={3} md={2} style={styles}>
            <p><code>{'xs={4} sm={3} md={2}'}</code></p>
          </Col>
          <Col xs={8} sm={9} md={10} style={styles}>
            <p><code>{'xs={8} sm={9} md={10}'}</code></p>
          </Col>
        </Row>

        <Row>
          <Col sm={8} style={styles}>
            <p><code>{'sm={6} md={3}'}</code></p>
          </Col>
          <Col sm={4} style={styles}>
            <p><code>{'sm={6} md={3}'}</code></p>
          </Col>
        </Row>

        <Row>
          <Col xs={6} sm={3} style={styles}>
            <p><code>{'xs={4} sm={3}'}</code></p>
          </Col>
          <Col xs={6} sm={3} style={styles}>
            <p><code>{'xs={4} sm={3}'}</code></p>
          </Col>
          <Col xs={6} sm={3} style={styles}>
            <p><code>{'xs={4} sm={3}'}</code></p>
          </Col>
          <Col xs={6} sm={3} style={styles}>
            <p><code>{'xs={4} sm={3}'}</code></p>
          </Col>
        </Row>

        <Row>
          <Col xs={4} sm={2} style={styles}>
            <p><code>{'xs={4} sm={2}'}</code></p>
          </Col>
          <Col xs={4} sm={2} style={styles}>
            <p><code>{'xs={4} sm={2}'}</code></p>
          </Col>
          <Col xs={4} sm={2} style={styles}>
            <p><code>{'xs={4} sm={2}'}</code></p>
          </Col>
          <Col xs={4} sm={2} style={styles}>
            <p><code>{'xs={4} sm={2}'}</code></p>
          </Col>
          <Col xs={4} sm={2} style={styles}>
            <p><code>{'xs={4} sm={2}'}</code></p>
          </Col>
          <Col xs={4} sm={2} style={styles}>
            <p><code>{'xs={4} sm={2}'}</code></p>
          </Col>
        </Row>

        <Row>
          <Col sm={12} style={styles}>
            <p><code>{'sm={12}'}</code></p>
          </Col>
        </Row>
      </Grid>
    </Container>
  ))