/* Task 1 */
function createObject(obj) {
  const keys = Object.keys(obj);

  keys.forEach(key => {
    if (typeof obj[key] === 'function') {
      obj[key] = obj[key].bind(obj);
    }
  });

  return obj;
}

/* Task 2 */
function ItemCollection(item) {
  this.item = item;
  this.removedItem = null;

  this.update = function (cb) {
    Object.seal(this.item);
    cb(this.item);
    return this;
  };

  this.read = function () {
    return this.item;
  };

  this.remove = function () {
    this.removedItem = this.item;
    this.item = null;
    return this.removedItem;
  };
}

function ItemsCollection(items) {
  this.items = items;

  this.update = function (cb) {
    for (let i = 0; i < this.items.length; i += 1) {
      cb(this.items[i], i);
    }

    return this;
  };

  this.read = function () {
    return this.items;
  };

  this.remove = function () {
    this.items.pop();
  };
}

function Collection(Constructor) {
  this.data = [];

  this.readAll = function () {
    return this.data;
  };

  this.add = function (...args) {
    this.data.push(new Constructor(...args));
  };

  this.get = function (cb) {
    return new ItemCollection(this.data.find(cb));
  };

  this.getBy = function (cb) {
    return new ItemsCollection(this.data.filter(cb));
  };
}

module.exports = {
  createObject,
  Collection,
};
