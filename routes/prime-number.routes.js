const express = require('express')
const primeNumberRouter = express.Router()

const { inputValidate } = require('../middleware/prime-number.middleware');
const { primeNumberController } = require('../controller/prime-number.controller');

primeNumberRouter.post('', inputValidate, primeNumberController);

module.exports = { primeNumberRouter }