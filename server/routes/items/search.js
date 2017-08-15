const request = require('request')

module.exports = query => new Promise((resolve, reject) => {

  request.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`, (err, res, body) => {
    !!err
      ? reject(err)
      : resolve(JSON.parse(body))
  })

})
