import { get, merge } from 'lodash';
import standard from './builtin/standard';

const output = {
  standard,
};

export const plugin = (input) => typeof input === 'object' && merge(output, input);

export default output;
