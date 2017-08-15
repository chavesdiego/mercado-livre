const search = require('./search')
const single = require('./single')
const description = require('./description')

const getCategories = filters =>
  filters.length
  ? filters[0].values[0].path_from_root.map(value => value.name)
  : []

const priceWithoutDecimals = price => Number(`${price}`.replace(/(\d)(\.\d+)/, '$1'))

const priceDecimals = price => {
  let hasDecimals = `${price}`.split('.').length > 1

  return hasDecimals
    ? Number(`${price}`.split('.')[1])
    : '00'
}

module.exports = {
   search,
   single,
   description,
   getCategories,
   priceDecimals,
   priceWithoutDecimals
}
