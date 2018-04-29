import React from 'react';
import { node, bool, string, shape } from 'prop-types';
import classNames from 'classnames/bind';

const propTypes = {
  reverse: bool,
  alignVTop: bool,
  alignHLeft: bool,
  style: shape({}),
  alignHRight: bool,
  className: string,
  alignHCenter: bool,
  alignVCenter: bool,
  alignVBottom: bool,
  alignVBaseline: bool,
  children: node.isRequired,
};

const defaultProps = {
  style: {},
  reverse: false,
  className: null,
  alignVTop: false,
  alignHLeft: false,
  alignHRight: false,
  alignVBottom: false,
  alignVCenter: false,
  alignHCenter: false,
  alignVBaseline: false,
};

const Row = (props) => {
  const {
    style,
    reverse,
    children,
    alignVTop,
    className,
    alignHLeft,
    alignHRight,
    alignVCenter,
    alignHCenter,
    alignVBottom,
    alignVBaseline,
  } = props;

  const rowClasses = {
    'row-reverse': reverse,
    'row-align-v-top': alignVTop,
    'row-align-h-left': alignHLeft,
    'row-align-h-right': alignHRight,
    'row-align-v-center': alignVCenter,
    'row-align-v-bottom': alignVBottom,
    'row-align-h-center': alignHCenter,
    'row-align-v-baseline': alignVBaseline,
  };

  const classes = classNames(
    'row',
    rowClasses,
    className,
  );

  return <div className={classes} style={style}>{children}</div>;
};

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;
export default Row;
