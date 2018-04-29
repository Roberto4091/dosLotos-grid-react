import React from 'react';
import { bool, node, string, shape } from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  isFluid: bool,
  isInline: bool,
  style: shape({}),
  className: string,
  children: node.isRequired,
};

const defaultProps = {
  style: {},
  isFluid: false,
  isInline: false,
  className: null,
};

const Container = (props) => {
  const {
    style,
    isFluid,
    isInline,
    children,
    className,
  } = props;

  const containerClasses = {
    container: !isFluid,
    'container-fluid': isFluid,
    'inline-container': isInline,
  };

  const classes = classNames(
    className,
    containerClasses,
  );
  
  return <div className={classes} style={style}>{children}</div>;
};

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;
export default Container;