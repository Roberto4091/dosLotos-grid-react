import React, { Component } from 'react';
import { number, shape, node } from 'prop-types';
import classNames from 'classnames/bind';

const DEVICE_SIZES = ['xss', 'xs', 'sm', 'md', 'lg']

const parser = (prefix, props) => {
  let classNames = [];
  DEVICE_SIZES.forEach(size => {
    for(let prop in props) {
      if (size === prop && typeof prop === 'object') {
        
      }
    }
  });
};

const propTypes = {
  xxs: shape({
    cols: number,
    order: number,
    offset: number,
  }),
  xs: shape({
    cols: number,
    order: number,
    offset: number,
  }),
  sm: shape({
    cols: number,
    order: number,
    offset: number,
  }),
  md: shape({
    cols: number,
    order: number,
    offset: number,
  }),
  lg: shape({
    cols: number,
    order: number,
    offset: number,
  }),
  children: node.isRequired,
};

const defaultProps = {
  xxs: {},
  xs: {},
  sm: {},
  md: {},
  lg: {},
};

const Col = (props) => {
  
  console.log(props);
  
  return <div >{props.children}</div>;
};

Col.propTypes = propTypes;
Col.defaultProps = defaultProps;
export default Col;