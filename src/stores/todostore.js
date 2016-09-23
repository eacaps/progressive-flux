'use strict';

import CommonWorker from '../workers/commonworker';
import TodoDispatcher from '../dispatcher/tododispatcher';
import {EventEmitter} from 'events';
import BaseStore from './basestore';

let StoreData;

class TodoStore extends BaseStore {
  constructor() {
    super();
  }

  initData(data, emit = false) {
    StoreData = {
      todos: []
    };
    if(data) {
      StoreData = Object.assign(StoreData, data);
    }
    if(emit) {
      this._emitChange();
    }
  }
  getName() {
    return 'TodoStore';
  }

  _addTodo(data) {
    if(data != null && StoreData.todos.indexOf(data) < 0) {
      StoreData.todos.push(data);
      this._emitChange();
    }
  }

  _removeTodo(data) {
    if(data != null && StoreData.todos.indexOf(data) > -1) {
      let idx = StoreData.todos.indexOf(data);
      StoreData.todos.splice(idx, 1);
      this._emitChange();
    }
  }
}

const _TodoStore = new TodoStore();

export default _TodoStore;

TodoDispatcher.register((payload) => {
  let action = payload.action;
  let data = action.data;
  switch(action.type) {
    case ServerEvents.ADD_TODO: {
      _TodoStore._addTodo(data);
    }
    break;
    default:
    break;
  }
});
