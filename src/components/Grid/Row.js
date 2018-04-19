import React, { Component } from 'react';
import { node, bool } from 'prop-types';
import classNames from 'classnames/bind';

const propTypes = {
  children: node.isRequired,
  alignVCenter: bool,
  alignVBottom: bool,
  alignVTop: bool,
  alignVBaseline: bool,
  alignHCenter: bool,
  alignHLeft: bool,
  alignHRight: bool,
  reverse: bool,
}

const defaultProps = {
  alignVCenter: false,
  alignVBottom: false,
  alignVTop: false,
  alignVBaseline: false,
  alignHCenter: false,
  alignHLeft: false,
  alignHRight: false,
  reverse: false,
}

const Row = ( props ) => {
  const {
    children,
    alignVCenter,
    alignVBottom,
    alignVTop,
    alignVBaseline,
    alignHCenter,
    alignHLeft,
    alignHRight,
    reverse,
  } = props;
  const classes = classNames(
    'row',
    {
      'row-align-v-center': alignVCenter,
      'row-align-v-bottom': alignVBottom,
      'row-align-v-top': alignVTop,
      'row-align-v-baseline': alignVBaseline,
      'row-align-h-center': alignHCenter,
      'row-align-h-left': alignHLeft,
      'row-align-h-right': alignHRight,
      'row-reverse': reverse,
    }
  );
  return(
    <div className={ classes }>{ children }</div>
  )
}
Row.propTypes = propTypes;
Row.defaultProps = defaultProps;
export default Row;
