# JavaScript array methods from scratch

This project implements **JavaScript array methods from scratch** to **learn how they work under the hood** and explore **prototypal inheritance**.

## Usage
```javascript
import "https://cdn.jsdelivr.net/gh/bokshi-gh/javascript-array-methods-from-scratch/src/main.js"

const arr = [1, 2, 3];
const doubled = arr.$map(x => x * 2);
console.log(doubled);
```

Available Methods

- pop
- push
- forEach
- map
- filter
- reduce

> All methods behave the same as the official ECMAScript specification, but the methods name are prefixed with $
