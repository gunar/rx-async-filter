const test = require('tape')

;[
  {
    name: 'rx-lite',
    lib: require('rx-lite'),
  },
  {
    name: 'rxjs',
      lib: require('rxjs'),
  },
].forEach(
  ({ name, lib: Rx }) => {
    require('.')(Rx)
    test(`works for ${name}`, t => {
      t.plan(2)

      Rx.Observable.from([1, 1, 2, 1, 1])
        .asyncFilter(async x => x === 2)
        .subscribe(() => t.pass('filters stuff'))

      Rx.Observable.from([1])
        .asyncFilter(async x => true)
        .subscribe(x => {
          if (x === 1) t.pass('returns original input (instead of predicate\'s)')
          else t.error()
        }, t.error)
    })
  })
