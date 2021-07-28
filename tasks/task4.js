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

// Expected result
function Dog(id, name) {
  this.id = id;
  this.name = name;
}

const dogsCollection = new Collection(Dog);

dogsCollection.readAll(); // => []

dogsCollection.add(1, 'Test name1'); // Creates instance of Dog
dogsCollection.add(2, 'Test name2'); // Creates instance of Dog
dogsCollection.add(3, 'Test name3'); // Creates instance of Dog

dogsCollection.readAll(); // => array [Dog instance(id = 1, name = 'Test name1'), Dog instance(id = 2, name = 'Test name2'), Dog instance(id = 3, name = 'Test name3')]

const dogsCollectionItem = dogsCollection.get(dog => dog.id === 1);

dogsCollectionItem
  .update(dog => {
    dog.name = 'Updated test name 1'; // => Dog instance(id = 1, name = 'Updated test name 1')
  })
  .update(dog => {
    dog.someNewField = 'Some new field'; // => nothing changed, collection items don't support initial model's extension (HINT: Object.seal should be used)
  });

const dog1 = dogsCollectionItem.read(); // => returns Dog instance object(id = 1, name = 'Test name1')

const dogsCollectionItems = dogsCollection.getBy(dog => dog.id < 3);

dogsCollectionItems.update((dog, index) => {
  // => callback iterates through all matches collection's items ([Dog instance(id = 1, name = 'Test name1'), Dog instance(id = 2, name = 'Test name2')])
  dog.name = `Updated test name ${index}`;
});

const dogs = dogsCollectionItems.read(); // => array [Dog instance(id = 1, name = 'Test name1'), Dog instance(id = 2, name = 'Test name2')]

dogsCollectionItem.remove(); // => removes Dog instance object(id = 1, name = 'Test name1') from collection
dogsCollection.remove(1);

module.exports = {
  createObject,
  Collection,
};
