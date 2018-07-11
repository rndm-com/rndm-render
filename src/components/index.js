import ReactNative from './react-native';

const output = {
  ReactNative,
};

export const use = (key, components) => output[key] = components;

export default output;
