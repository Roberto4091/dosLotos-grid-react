import React from 'react';
import { node, number, string, oneOfType, shape } from 'prop-types';
import classNames from 'classnames';

const DEVICE_SIZES = ['xxs', 'xs', 'sm', 'md', 'lg'];

const stringOrNumberProp = oneOfType([number, string]);

const columnProps = oneOfType([
  number,
  string,
  shape({
    size: oneOfType([number, string]),
    order: stringOrNumberProp,
    offset: stringOrNumberProp,
  }),
]);

const propTypes = {
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  style: shape({}),
  className: string,
  children: node.isRequired,
};

const defaultProps = {
  xs: {},
  sm: {},
  md: {},
  lg: {},
  xl: {},
  style: {},
  className: null,
};

const Col = (props) => {
  const colClasses = [];
  const {
    style,
    children,
    className,
  } = props;

  DEVICE_SIZES.forEach((colWidth, i) => {
    let columnProp = props[colWidth];
    // Prevent empty var or value size prop
    if (!columnProp) return;
    
    if ((typeof columnProp === "object")) {
      const colClass = `col-${colWidth}-${columnProp.size}`;
      
      colClasses.push(classNames({
        [colClass]: columnProp.size,
        [`col-${colWidth}-ord-${columnProp.order}`]: columnProp.order,
        [`col-${colWidth}-offset-${columnProp.offset}`]: columnProp.offset,
      }));
    } else {
      colClasses.push(`col-${colWidth}-${columnProp}`);
    }
  });

  const classes = classNames(
    className,
    colClasses,
  );
  
  return <div className={classes} style={style}>{children}</div>;
};

Col.propTypes = propTypes;
Col.defaultProps = defaultProps;
export default Col;
