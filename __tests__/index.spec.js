(function () {
  require('../src');

  describe('api.basic test', () => {
    test('test integer list step: +1', function () {
      var list = nx.range(1, 10);
      expect(list).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    test('test integer list step: -1', function () {
      var list = nx.range(10, 1);
      expect(list).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
    });
  });
})();
