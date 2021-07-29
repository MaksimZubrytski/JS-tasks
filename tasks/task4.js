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

  this.seal = function () {
    Object.seal(this.item);
  };

  this.seal();

  this.update = function (cb) {
    cb(this.item);
    return this;
  };

  this.read = function () {
    return this.item;
  };

  this.remove = function () {
    return this.data.splice(index, 1)[0];
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
    return Object.defineProperty(
      new CollectionItem(
        this.data.find(cb),
        this.data,
        this.data.findIndex(cb),
      ),
      'item',
      {
        writable: false,
        enumerable: true,
        configurable: true,
      },
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
    return this.data.splice(index, 1)[0];
  };
}

module.exports = {
  createObject,
  Collection,
};
