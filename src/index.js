import components from './plugins/components';
import methods from './plugins/methods';
import renderers from './plugins/renderers';
import resolve from './plugins/middlewares/resolve';
import render, { promise } from './render';
import use from './use';
import build from './build';

export {
  use,
  build,
  components,
  methods,
  renderers,
  render,
  resolve,
  promise,
};
