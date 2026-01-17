Array.prototype.$push = function (value) {
  this[this.length] = value;
  return ++this.length;
};

Array.prototype.$pop = function () {
  if (this.length === 0) return undefined;

  const lastIndex = this.length - 1;
  const lastValue = this[lastIndex];

  delete this[lastIndex];
  this.length--;

  return lastValue;
};

Array.prototype.$forEach = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  for (let i = 0; i < this.length; i++) {
    if (i in this) {  // skip holes
      callback.call(thisArg, this[i], i, this);
    }
  }
};

Array.prototype.$map = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      result.push(callback.call(thisArg, this[i], i, this));
    }
  }

  return result;
};

Array.prototype.$filter = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (i in this && callback.call(thisArg, this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
};

Array.prototype.$reduce = function (callback, initialValue) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  if (this.length === 0 && initialValue === undefined) {
    throw new TypeError("Reduce of empty array with no initial value");
  }

  let acc;
  let startIndex = 0;

  if (initialValue !== undefined) {
    acc = initialValue;
  } else {
    // find first non-hole
    while (startIndex < this.length && !(startIndex in this)) {
      startIndex++;
    }
    acc = this[startIndex];
    startIndex++;
  }

  for (let i = startIndex; i < this.length; i++) {
    if (i in this) {
      acc = callback(acc, this[i], i, this);
    }
  }

  return acc;
};
