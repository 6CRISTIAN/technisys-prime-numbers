const getPrimeNumbersByLimitNum = (num) => {
   let primeNumbers = []

   for (let currentNum = 2; currentNum <= num; currentNum++) {
      const isPrimeNum = isPrimeNumber(currentNum)
      addPrimeNum(primeNumbers, isPrimeNum, currentNum)
   }

   return primeNumbers.reverse()
}

const addPrimeNum = (list, isPrimeNum, num) => {
   if (isPrimeNum)
      list.push(num)
}

const isPrimeNumber = (num) => {
   for (let n = 2; n < num / 2; n++)
      if (num % n === 0) return false
   return num > 1 && num !== 4
}

module.exports = { getPrimeNumbersByLimitNum }