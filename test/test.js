const assert = require('assert');

describe('test', () => {
  describe('indexOf function', () => {
    it('should return -1 if the value is not present', () => {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});