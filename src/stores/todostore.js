'use strict';

import CommonWorker from '../workers/commonworker';
import TodoDispatcher from '../dispatcher/tododispatcher';
import Events from '../dispatcher/events';
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

  getState() {
    return Object.assign({}, StoreData);
  }

  process_list(todos) {
    StoreData.todos = [];
    for(let key of Object.keys(todos)) {
      let todo = todos[key];
      StoreData.todos.push(todo);
    }
    this._emitChange();
  }
}

const _TodoStore = new TodoStore();

export default _TodoStore;

TodoDispatcher.register((payload) => {
  let action = payload.action;
  let data = action.data;
  switch(action.type) {
    case Events.LIST_TODOS: {
      _TodoStore.process_list(data.todos);
    }
    default:
    break;
  }
});
