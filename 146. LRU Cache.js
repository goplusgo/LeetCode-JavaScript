var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.cache = new Array();
};

LRUCache.prototype.get = function (key) {
  for (let i = 0; i < this.cache.length; ++i) {
    if (this.cache[i][0] === key) {
      let entry = this.cache[i];
      this.cache.splice(i, 1);
      this.cache.push(entry);
      return entry[1];
    }
  }

  return -1;
};

LRUCache.prototype.put = function (key, value) {
  for (let i = 0; i < this.cache.length; ++i) {
    if (this.cache[i][0] === key) {
      let entry = this.cache[i];
      this.cache.splice(i, 1);
      entry[1] = value;
      this.cache.push(entry);
      return entry[1];
    }
  }

  if (this.cache.length === this.capacity) {
    this.cache.shift();
  }

  this.cache.push([key, value]);
};
