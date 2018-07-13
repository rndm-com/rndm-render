import { merge } from 'lodash';

const output = {};

export const plugin = (input) => typeof input === 'object' && merge(output, input);

export default output;
