'use strict';

import {Dispatcher} from 'flux';
import CommonWorker from '../workers/commonworker';

class TodoDispatcher extends Dispatcher {
  handleAction(action) {
    let WORKER = CommonWorker.getWorker();
    if(WORKER) {
      WORKER.postMessage(JSON.stringify(action));
    } else {
      try {
        this.dispatch({
          source: 'ACTION',
          action: action
        });
      } catch(e) {
        console.error(e); // eslint-disable-line no-console
      }
    }
  }
}

let _TodoDispatcher = new TodoDispatcher();

export default _TodoDispatcher;
