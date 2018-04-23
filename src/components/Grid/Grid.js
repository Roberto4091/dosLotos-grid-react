import React from 'react';
import { node, bool, number, shape } from 'prop-types';
import classNames from 'classnames/bind';
// SubComponents
import Row from './Row';
import Col from './Col';

const propTypes = {
  md: number,
  sm: number,
  xs: number,
  grid: number,
  mdHorizontal: bool,
  smHorizontal: bool,
  xsHorizontal: bool,
  children: node.isRequired,
};

const defaultProps = {
  md: 0,
  sm: 0,
  xs: 0,
  grid: 0,
  mdHorizontal: false,
  smHorizontal: false,
  xsHorizontal: false,
};

const Grid = ({
  md,
  sm,
  xs,
  grid,
  children,
  mdHorizontal,
  smHorizontal,
  xsHorizontal,
}) => {
  const classes = classNames('grid-layout', {
    [`grid-md-${md}`]: md,
    [`grid-sm-${sm}`]: sm,
    [`grid-xs-${xs}`]: xs,
    [`grid-${grid}`]: grid,
    'grid-md-horizontal': mdHorizontal,
    'grid-sm-horizontal': smHorizontal,
    'grid-xs-horizontal': xsHorizontal,
  });
  
  return <div className={classes}>{children}</div>;
};

Grid.Row = Row;
Grid.Col = Col;
Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;
export default Grid;