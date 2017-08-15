const routes = require('express').Router()
const cors = require('cors')

const { search, single, description, getCategories, priceDecimals, priceWithoutDecimals } = require('./items')

routes.get('/items', cors(), (req, res) => {

  search(req.query.search).then(data => {
    res.status(200).json({
      "author": {
        "name": "",
        "lastname": ""
      },
      "categories": getCategories(data.filters),
      "items": data.results.slice(0,4)
    })
  }).catch(err => {
    throw new Error(err)
  })

})


routes.get('/items/:id', cors(), (req, res) => {

  Promise.all([
    single(req.params.id),
    description(req.params.id)
  ]).then(response => {
    response[0].error
    ? res.status(404).send(response[0].message)
    : res.status(200).json({
        "author": {
          "name": "",
          "lastname": ""
        },
        "item": {
          "id": response[0].id,
          "title": response[0].title,
          "price": {
            "currency": response[0].currency_id,
            "amount": priceWithoutDecimals(response[0].price),
            "decimals": priceDecimals(response[0].price)
          }
        },
        "picture": response[0].pictures[0],
        "condition": response[0].condition,
        "free_shipping": response[0].shipping.free_shipping,
        "sold_quantity": response[0].sold_quantity,
        "description": response[1].plain_text ? response[1].plain_text : response[1].text
      })

  }).catch(err => {
    throw new Error(err)
  })

})


module.exports = routes
