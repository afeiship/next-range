(function () {
  var nx = require('@feizheng/next-js-core2');
  var NxRange = require('../src/next-range');

  describe('NxRange.methods', function () {
    test('test integer list', function () {
      var list = NxRange.integer(1, 10);
      expect(list).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
  });
})();
