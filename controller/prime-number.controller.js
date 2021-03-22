const { getPrimeNumbersByLimitNum } = require('../services/prime-number.service')
const { defaultMsgErr } = require('../utils/constants')

const primeNumberController = async (req, res) => {
   try {

      const { limitNumber } = req.body
      const primeNumbers = getPrimeNumbersByLimitNum(limitNumber)
      res.status(200).json({ primeNumbers })

   } catch (err) {

      console.error(err)
      res.status(err.code || 500).json({ message: err.message || defaultMsgErr })

   }
}

module.exports = { primeNumberController }