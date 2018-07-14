import { get } from 'lodash';
import render from '../render';

export const reduce = (o = '', match = '') => {
  const key = match.substring('$$PROPS.'.length + 1, match.length - 1);
  const value = get(props, key, null);
  const stringified = JSON.stringify(value);
  return o.split(match).join(stringified);
};

export const Element = input => (props) => {
  const string = JSON.stringify(input);
  const regex = '"\\$\\$PROPS\\.(.*?)"';
  const matches = new Set(string.match(new RegExp(regex, 'g')) || []);
  return render(JSON.parse([...matches].reduce(reduce, string)));
};

const build = input => {
  if (typeof input !== 'object') return input;
  return Element(input);
};

export default build;
