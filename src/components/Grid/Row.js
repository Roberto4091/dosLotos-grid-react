import React, { Component } from 'react';
import { node, bool } from 'prop-types';
import classNames from 'classnames/bind';

const propTypes = {
  reverse: bool,
  alignVTop: bool,
  alignHLeft: bool,
  alignHRight: bool,
  alignHCenter: bool,
  alignVCenter: bool,
  alignVBottom: bool,
  alignVBaseline: bool,
  children: node.isRequired,
};

const defaultProps = {
  reverse: false,
  alignVTop: false,
  alignHLeft: false,
  alignHRight: false,
  alignVBottom: false,
  alignVCenter: false,
  alignHCenter: false,
  alignVBaseline: false,
};

const Row = ({
  reverse,
  children,
  alignVTop,
  alignHLeft,
  alignHRight,
  alignVCenter,
  alignHCenter,
  alignVBottom,
  alignVBaseline,
}) => {
  const classes = classNames('row', {
    'row-reverse': reverse,
    'row-align-v-top': alignVTop,
    'row-align-h-left': alignHLeft,
    'row-align-h-right': alignHRight,
    'row-align-v-center': alignVCenter,
    'row-align-v-bottom': alignVBottom,
    'row-align-h-center': alignHCenter,
    'row-align-v-baseline': alignVBaseline,
  });

  return <div className={classes}>{children}</div>;
};

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;
export default Row;
