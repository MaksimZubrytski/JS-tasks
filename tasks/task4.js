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
function CollectionItem(item, data, index) {
  this.item = item;
  this.data = data;
  this.index = index;

  this.update = function (cb) {
    Object.seal(this.item);
    cb(this.item);
    return this;
  };

  this.read = function () {
    return this.item;
  };

  this.remove = function () {
    this.data.splice(index, 1);
    return this.item;
  };
}

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
    return new CollectionItem(
      this.data.find(cb),
      this.data,
      this.data.findIndex(cb),
    );
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
    this.data.splice(index, 1);
  };
}

module.exports = {
  createObject,
  Collection,
};
