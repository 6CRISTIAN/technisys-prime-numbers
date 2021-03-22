const assert = require('assert')

const {
   getPrimeNumbersByLimitNum,
   isPrimeNumber
} = require('../services/prime-number.service')

describe('Service validation', () => {

   it('validate prime numbers from 2 to 13.', () => {
      let result = getPrimeNumbersByLimitNum(13)
      assert.deepStrictEqual(result, [13, 11, 7, 5, 3, 2])
   })

   it('validate prime numbers from 2 to 7.', () => {
      let result = getPrimeNumbersByLimitNum(7)
      assert.deepStrictEqual(result, [7, 5, 3, 2])
   })

   it('validate prime numbers from 2 to 2.', () => {
      let result = getPrimeNumbersByLimitNum(2)
      assert.deepStrictEqual(result, [2])
   })

   it('validate prime numbers by input as 1.', () => {
      let result = getPrimeNumbersByLimitNum(1)
      assert.deepStrictEqual(result, [])
   })

   it(`validate if 'isPrimeNumber' function return true by 13 as input.`, () => {
      let result = isPrimeNumber(13)
      assert.ok(result)
   })
})