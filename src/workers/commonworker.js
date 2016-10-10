let WORKER = null;

class CommonWorker {
  constructor() {
    if(typeof(document) !== 'undefined') {
      WORKER = new Worker('/dist/fluxworker-bundle.js');
    }
  }
  getWorker() {
    return WORKER;
  }
}

let _CommonWorker = new CommonWorker();

export default _CommonWorker;
