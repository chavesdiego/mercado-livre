const request = require('request')

module.exports = id => new Promise((resolve, reject) => {

  request.get(`https://api.mercadolibre.com/items/${id}/description`, (err, res, body) => {
    !!err
      ? reject(err)
      : resolve(JSON.parse(body))
  })

})
