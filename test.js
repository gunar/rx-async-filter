const test = require('tape');
const { from } = require('rxjs');
const asyncFilter = require('.');

test(`works for rxjs`, t => {
  t.plan(2);

  from([1, 1, 2, 1, 1])
    .pipe(asyncFilter(async x => x === 2))
    .subscribe({
      next: x => {
        if (x !== 2) t.error();
      },
      complete: () => t.pass('filters stuff')
    });

  from([1])
    .pipe(asyncFilter(async x => true))
    .subscribe(x => {
      if (x === 1) t.pass("returns original input (instead of predicate's)");
      else t.error();
    }, t.error);
});
