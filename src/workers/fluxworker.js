import TodoStore from '../stores/todostore';
import TodoDispatcher from '../dispatcher/tododispatcher';
import Dexie from 'dexie';

self.addEventListener('message', (e) => {
  let json_obj = JSON.parse(e.data);
  TodoDispatcher.handleAction(json_obj);
}, false);

var db = new Dexie("todo_states");
db.version(1).stores({
 states: "key,value"
});

let RegisterStore = (store) => {
  let name = store.getName();
  store.addChangeListener(() => {
    let state = store.getState();
    db.states.put({key: name, value: state})
    self.postMessage({
      store: name,
      state: state
    });
  });
  db.states.where('key')
    .equalsIgnoreCase(name)
    .toArray()
    .then(function (results) {
        // do something with the results
        let state = results[0].value;
        store.initData(state, true);
    });
};

RegisterStore(TodoStore);
