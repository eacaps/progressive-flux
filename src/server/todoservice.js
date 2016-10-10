var Store = require("jfs");
var db = new Store("../../data/data.json");

module.exports = {
  listTodos: () => {
    var objs = db.allSync();
    return objs;
  },
  saveTodo: (todo) => {
    var id = db.saveSync(new Date().getTime(), todo);
  }
}
