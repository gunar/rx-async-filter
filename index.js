const { map, filter, flatMap } = require('rxjs/operators');
const { from } = require('rxjs');

const EMPTY = Symbol();

module.exports = asyncFunction =>
  flatMap(value =>
    from(asyncFunction(value)).pipe(
      map(youShallPass => (youShallPass ? value : EMPTY)),
      filter(result => result !== EMPTY)
    )
  );
