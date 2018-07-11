import components, { plugin } from './components';
import render from './render';

export const use = ({ key, components } = {}) => {
  if(key) {
    if (typeof components === 'object') plugin({ [key]: components })
  }
};

export {
  use,
  components,
  render,
};
