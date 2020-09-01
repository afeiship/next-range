/*!
 * name: @feizheng/next-range
 * description: Range array with step for javascript.
 * homepage: https://github.com/afeiship/next-range
 * version: 1.0.2
 * date: 2020-09-01T07:41:49.835Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  var NxRange = nx.declare('nx.Range', {
    statics: {
      integer: function (start, stop, step) {
        if (stop == null) {
          stop = start || 0;
          start = 0;
        }
        if (!step) {
          step = stop < start ? -1 : 1;
        }

        var length = Math.max(Math.ceil((stop - start) / step), 0);
        var range = Array(length);

        for (var idx = 0; idx <= length; idx++, start += step) {
          range[idx] = start;
        }
        return range;
      },
      lowerAz: function () {
        var result = [];
        for (var i = 97; (result[result.length] = String.fromCharCode(i)), i <= 121; i++);
        return result;
      },
      upperAz: function () {
        var result = [];
        for (var i = 65; (result[result.length] = String.fromCharCode(i)), i <= 89; i++);
        return result;
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxRange;
  }
})();
