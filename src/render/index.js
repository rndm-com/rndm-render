import React from 'react';
import { unary, get, stubFalse } from 'lodash';
import renderers from '../plugins/renderers';

export const promise = (...args) => new Promise(resolve => resolve(render(...args)));

const render = (input, renderer = 'RNDM.core', additional) => (
  input !== undefined &&
  (
    Array.isArray(input) ? input.map(unary(get(renderers, renderer)|| stubFalse)) :
      typeof input === 'object' ? (get(renderers, renderer)|| stubFalse)(input, additional) :
        typeof input === 'string' ? input :
          typeof input === 'number' ? `${input}` :
            typeof input === 'function' ? `${input()}` : null
  )
);

render.promise = promise;

export default render;
