'use strict';

import CommonWorker from '../workers/commonworker';
import {EventEmitter} from 'events';

let StoreData;

export default class BaseStore extends EventEmitter {
  constructor() {
    super();
    this._initData();
    let this_ = this;
    if(CommonWorker.getWorker()) {
      CommonWorker.getWorker().addEventListener('message', (e) => {
        let data = e.data;
        if(data.store) {
          if(data.store === this_.getName()) {
            this_._initData(data.state, true);
          }
        }
      }, false);
    }
  }
  getName() {
    return 'unregistered_store';
  }
  initData(data, emit = false) {
  }

  _emitChange() {
    this.emit('CHANGE');
  }


  getState() {
    return Object.assign({}, StoreData);
  }
  addChangeListener(cb) {
    this.on('CHANGE', cb)
  }
  removeChangeListener(cb) {
    this.removeListener('CHANGE', cb);
  }
}
