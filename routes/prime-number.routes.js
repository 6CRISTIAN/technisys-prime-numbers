const express = require('express')
const primeNumberRouter = express.Router()

const { getPrimeNumbersByLimitNum } = require('../services/prime-number.service')
const { defaultMsgErr } = require('../utils/constants');

primeNumberRouter.post('', async (req, res) => {
   try {

      const { limitNumber } = req.body
      const primeNumbers = getPrimeNumbersByLimitNum(limitNumber);
      res.status(200).json({ primeNumbers })

   } catch (err) {

      console.error(err)
      res.status(err.code || 500).json({ message: err.message || defaultMsgErr })

   }
});

module.exports = { primeNumberRouter }