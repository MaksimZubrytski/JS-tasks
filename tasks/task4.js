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
function Collection(Constructor) {
  this.data = [];
  this.collectionItems = null;

  this.readAll = function () {
    return this.data;
  };

  this.add = function (...args) {
    this.data.push(new Constructor(...args));
  };

  this.get = function (cb) {
    return {
      item: this.data.find(cb),
      data: this.data,
      index: this.data.findIndex(cb),

      update(func) {
        Object.seal(this.item);
        func(this.item);
        return this;
      },
      read() {
        return this.item;
      },
      remove() {
        return this.data.splice(this.index, 1)[0];
      },
    };
  };

  this.getBy = function (cb) {
    this.collectionItems = this.data.filter(cb);
    return this;
  };

  this.update = function (cb) {
    for (let i = 0; i < this.collectionItems.length; i += 1) {
      cb(this.collectionItems[i], i);
    }

    return this;
  };

  this.read = function () {
    return this.collectionItems;
  };

  this.remove = function (index) {
    return this.data.splice(index, 1)[0];
  };
}

module.exports = {
  createObject,
  Collection,
};
