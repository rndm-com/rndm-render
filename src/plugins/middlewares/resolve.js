import { get, identity } from 'lodash';
import middlewares from './';

const resolve = (input = []) => (
  input.reduceRight((o, { middleware, args }) => {
    const { method = () => identity, resolve = identity } = get(middlewares, middleware, {});
    const parameters = resolve(args);
    return o(method(...parameters));
  }, identity)
);

export default resolve;
