# rx-async-filter ![rxjs logo](https://frontendmasters.com/assets/logo-128.png)

[![CircleCI](https://circleci.com/gh/invisible-tech/rx-async-filter/tree/master.svg?style=svg)](https://circleci.com/gh/invisible-tech/rx-async-filter/tree/master)

Asynchronous Filter Operator for RxJS

```
npm install rx-async-filter
```

## Example

```js
const { from } = require('rxjs');
const asyncFilter = require('rx-async-filter');

from([1, 1, 2, 1, 1])
  .pipe(asyncFilter(async x => x === 2))
  .subscribe(() => t.end());
```
