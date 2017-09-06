const EMPTY = Symbol()

module.exports = function (Rx) {
  Rx.Observable.prototype.asyncFilter = function (filter) {
    return this
      .flatMap(async x => {
        if (await filter(x)) return x
        return EMPTY
      })
      .filter(x => x !== EMPTY)
  }
}
