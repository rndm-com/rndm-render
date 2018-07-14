import React from 'react';
import { unary, get, stubFalse } from 'lodash';
import renderers from '../plugins/renderers';

const render = (input, renderer = 'RNDM.core') => (
  !!input &&
  (
    Array.isArray(input) ? input.map(unary(get(renderers, renderer)|| stubFalse)) :
      typeof input === 'object' ? (get(renderers, renderer)|| stubFalse)(input) :
        typeof input === 'string' ? input : null
  )
);

export default render;
