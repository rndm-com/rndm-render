import React from 'react';
import { get, unary } from 'lodash';
import components from '../components';

const Element = ({ type, props: { children: kids, ...props } }) => {
  const Output = get(components, type, components.ReactNative.View);
  const children = Array.isArray(kids) ? kids.map(unary(Element)) :
    typeof kids === 'object' ? Element(kids) : kids;
  return (
    <Output {...props}>
      {children}
    </Output>
  )
};

const render = (views = []) => (
  views.map(unary(Element))
);

export default render;
