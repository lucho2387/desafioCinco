const express = require('express')

const router = express.Router()

const {
    formProduct,
    listProduct,
    newProduct
  } = require('../controllers/productos')

router.route('/')
        .get(formProduct)

router.route('/productos')
        .get(listProduct)
        .post(newProduct)

module.exports = router