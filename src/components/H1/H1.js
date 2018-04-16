import React, { Component } from 'react';
import { string } from 'prop-types';

const propTypes = {
  text: string.isRequired,
}

const H1 = ({ text }) => (
  <h1>{ text }</h1>
);

H1.propTypes = propTypes;
export default H1;