const inputValidate = (req, res, next) => {
   const { limitNumber } = req.body;
   (limitNumber && typeof limitNumber === 'number')
      ? next()
      : res.status(400).json({ message: 'cuerpo de la petición invalido.' })
}

module.exports = { inputValidate }