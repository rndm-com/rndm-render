import React from 'react';
import { View } from 'react-native';
import { get } from 'lodash';
import components from '../../components';
import resolve from '../../middlewares/resolve';
import render from '../../../render';

const Default = View;

const standard = ({ type, props: { children, middleware = [], ...props } = {} } = {}) => {
  const Output = get(components, type, Default);
  return resolve(middleware)(
    typeof Output === 'function' &&
    <Output {...props}>
      {render(children)}
    </Output>
  );
};

export default standard;
