const assert = require('assert');
const { expect }  = require('chai');

describe('test', () => {
  describe('indexOf function', () => {
    it('should return -1 if the value is not present', () => {
      expect([1, 2, 3].indexOf(4)).to.equal(-1);
    });
  });
});