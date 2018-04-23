import React, { Component } from 'react';
import { bool, node } from 'prop-types';
import classNames from 'classnames/bind';

const propTypes = {
  isFluid: bool,
  isInline: bool,
  children: node.isRequired,
};

const defaultProps = {
  isFluid: false,
  isInline: false,
};

const Container = ({ children, isFluid, isInline }) => {
  const classes = classNames({
    container: !isFluid,
    'container-fluid': isFluid,
    'inline-container': isInline,
  });
  
  return <div className={classes}>{children}</div>;
};

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;
export default Container;