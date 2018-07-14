import { set, noop, identity } from 'lodash';
import { plugin as Components } from '../plugins/components';
import { plugin as Methods } from '../plugins/methods';
import { plugin as Renderers } from '../plugins/renderers';
import { plugin as Middlewares } from '../plugins/middlewares';
import build from '../build';

export const addItem = (input, key, value, builder) => value && set(input, key, builder(value));

export const plugin = (Plugin = noop, key, array, builder = identity) => (
  Array.isArray(array) &&
  Plugin(
    array.reduce((o, { type, value }) => (
      addItem(o, [key, type].filter(Boolean).join('.'), value, builder)
    ), {})
  )
);

const use = (input) => {
  if (typeof input === 'object' && !Array.isArray(input)) {
    const { key, components, renderers, methods, middleware } = input;
    plugin(Components, key, components, build);
    plugin(Renderers, key, renderers);
    plugin(Methods, key, methods);
    plugin(Middlewares, key, middleware);
  }
};

export default use;
