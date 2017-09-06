# rx-async-filter ![rxjs logo](https://frontendmasters.com/assets/logo-128.png)

[![CircleCI](https://circleci.com/gh/invisible-tech/rx-async-filter/tree/master.svg?style=svg&circle-token=a026fc0f2703e372d890aaf7e068a2a2aee2d83d)](https://circleci.com/gh/invisible-tech/rx-async-filter/tree/master)

Asynchronous Filter Operator for RxJS

```
npm install rx-async-filter
```

## Example

```js
const Rx = require('rx-lite')
// works with 
require('rx-async-filter')(Rx)

  Rx.Observable.fromArray([1, 1, 2, 1, 1])
    .asyncFilter(async x => x === 2)
    .subscribe(() => t.end())
```
