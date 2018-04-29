import React from 'react';
import { node, number, string, oneOfType, shape, bool } from 'prop-types';
import classNames from 'classnames';

const DEVICE_SIZES = ['md', 'sm', 'xs'];

const stringOrNumberProp = oneOfType([number, string]);

const gridProps = oneOfType([
  stringOrNumberProp,
  shape({
    size: oneOfType([number, string]),
    horizontal: bool,
  }),
]);

const propTypes = {
  md: gridProps,
  sm: gridProps,
  xs: gridProps,
  style: shape({}),
  className: string,
  grid: stringOrNumberProp,
  children: node.isRequired,
};

const defaultProps = {
  md: {},
  sm: {},
  xs: {},
  grid: 0,
  style: {},
  className: null,
};

const Grid = (props) => {
  const gridClasses = [];
  const {
    grid,
    style,
    children,
    className,
  } = props;

  // Added primary class grid 
  (grid) ? gridClasses.push(`grid-${grid}`) : null;

  // Added seconds prop for each device sizes
  DEVICE_SIZES.forEach((gridWidth, i) => {
    let gridProp = props[gridWidth];
    // Prevent empty var or value size prop
    if (!gridProp) return;

    if ((typeof gridProp === "object")) {
      const gridClass = `grid-${gridWidth}-${gridProp.size}`;

      gridClasses.push(classNames({
        [gridClass]: gridProp.size,
        [`grid-${gridWidth}-horizontal`]: gridProp.horizontal,
      }));
    } else {
      gridClasses.push(`grid-${gridWidth}-${gridProp}`);
    }
  });

  // Build the class names
  const classes = classNames(
    className,
    gridClasses,
  );
  
  return <div className={classes} style={style}>{children}</div>;
};

Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;
export default Grid;