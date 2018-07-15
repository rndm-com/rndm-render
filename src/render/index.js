import React from 'react';
import { unary, get, stubFalse } from 'lodash';
import renderers from '../plugins/renderers';

export const promise = (...args) => new Promise(resolve => resolve(render(...args)));

const render = (input, renderer = 'RNDM.core') => (
  !!input &&
  (
    Array.isArray(input) ? input.map(unary(get(renderers, renderer)|| stubFalse)) :
      typeof input === 'object' ? (get(renderers, renderer)|| stubFalse)(input) :
        typeof input === 'string' ? input : null
  )
);

render.promise = promise;

export default render;
