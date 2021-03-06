import { helper } from 'ember-helper';
import { toggle } from './toggle';
import ACTION from '../-private/closure-action';

const closureToggle = toggle;
closureToggle[ACTION] = true;

export default helper(closureToggle);
