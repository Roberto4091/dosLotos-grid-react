import React from 'react';
import { node, bool } from 'prop-types';
import classNames from 'classnames/bind';
// SubComponents
import Row from './Row';
import Column from './Column';

const propTypes = {
  children: node.isRequired,
  isFluid: bool,
  isInline: bool,
}

const defaultProps = {
  isFluid: false,
  isInline: false,
}

const Grid = ({ children, isFluid, isInline }) => {
  const classes = classNames(
    {
      container: !isFluid,
      'container-fluid': isFluid,
      'inline-container': isInline,
    }
  );
  return (
    <div className={ classes }>{ children }</div>
  )
}

Grid.Row = Row;
Grid.Column = Column;
Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;
export default Grid;