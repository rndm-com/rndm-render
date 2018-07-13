import React from 'react';
import { unary, get } from 'lodash';
import renderers from '../plugins/renderers';

const render = (input, renderer = 'standard') => (
  !!input &&
  (
    Array.isArray(input) ? input.map(unary(get(renderers, renderer)|| renderers.standard)) :
      typeof input === 'object' ? (get(renderers, renderer)|| renderers.standard)(input) :
        typeof input === 'string' ? input : null
  )
);

export default render;
