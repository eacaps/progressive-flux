import Dispatcher from '../dispatcher/tododispatcher';
import Events from '../dispatcher/events';

export default {
  listTodos: () => {
    fetch('/todos').then((data) => {
      Dispatcher.handleAction({
        type: Events.LIST_TODOS,
        data: data
      });
    });
  },
  addTodo: () => {

  }
}
