var Store = require("jfs");
var db = new Store("data/data.json");

module.exports = {
  listTodos: () => {
    var objs = db.allSync();
    return objs;
  },
  saveTodo: (text) => {
    let id = new Date().getTime();
    db.saveSync(id, text);
    return id;
  }
}
