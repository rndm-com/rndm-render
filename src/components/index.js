import { merge } from 'lodash';
import ReactNative from './react-native';

const output = {
  ReactNative,
};

export const plugin = (input) => typeof input === 'object' && merge(output, input);

export default output;
