(function () {

  var global = global || window || this;

  var nx = global.nx || require('next-js-core2');
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

        for (var idx = 0; idx < length; idx++, start += step) {
          range[idx] = start;
        }
        return range;
      }
    }
  });


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxRange;
  }

}());
