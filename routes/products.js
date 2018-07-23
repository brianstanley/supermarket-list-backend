var express = require('express');
var router = express.Router();
let Product = require("../models/Product").Product

/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find({}, function(err, products){
    res.send(products);    
  })
});

router.post('/add', (req, res, next) => {
  let data = new Product(req.body)
  data.save().then(item => {
    res.send("item saved to database");
  }).catch(err => {
    res.status(400).send('no se pudo guardar')
  })
})

router.delete('/delete/:id', (req, res, next) => {
  Product.findByIdAndRemove(req.params.id, (err, product) => {
    if(err) return req.status(500).send(err)
    
    const response = {
      message: 'Borrado correctamente',
      id: product._id
    }

    return res.status(200).send(response)
  })
})

module.exports = router;
