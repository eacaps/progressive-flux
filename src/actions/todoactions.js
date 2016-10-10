import Dispatcher from '../dispatcher/tododispatcher';
import Events from '../dispatcher/events';

export default {
  listTodos: () => {
    return fetch('/todos').then((response) => {
      return response.json();
    }).then((data) => {
      Dispatcher.handleAction({
        type: Events.LIST_TODOS,
        data: data
      });
    });
  },
  addTodo: (text) => {
    return fetch('/todos',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({text: text})
    }).then((response) => {
      return response.json();
    });
  }
}
