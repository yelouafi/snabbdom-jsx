/** @jsx html */

import { html } from '../../../snabbdom-jsx';
import snabbdom from 'snabbdom';
import Todos from './todos';

const patch = snabbdom.init([
  require('snabbdom/modules/class'),          // makes it easy to toggle classes
  require('snabbdom/modules/props'),          // for setting properties on DOM elements
  require('snabbdom/modules/style'),          // handles styling on elements with support for animations
  require('snabbdom/modules/eventlisteners'), // attaches event listeners
]);


let model = Todos.init(handler),
    vnode = document.getElementById('todoapp');

function updateUI() {
  const newVnode = <Todos model={model} handler={handler} />
  vnode = patch(vnode, newVnode);
}

function handler(action) {
  model = Todos.update(model, action);
  updateUI();
}

updateUI();
