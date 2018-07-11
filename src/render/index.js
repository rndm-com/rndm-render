import React from 'react';
import { View } from 'react-native';
import { get, unary } from 'lodash';
import components from '../components';

const Default = View;

const Element = ({ type, props: { children, ...props } }) => {
  const Output = get(components, type, Default);
  return (
    <Output {...props}>
      {render(children)}
    </Output>
  )
};

const render = input => (
  !!input &&
  (
    Array.isArray(input) ? input.map(unary(Element)) :
      typeof input === 'object' ? Element(input) :
        typeof input === 'string' ? input : null
  )
);

export default render;
