const initialState = {
  list: [],
  current: {},
  listFetching: false,
  listFetched: false,
  productFetching: false,
  productFetched: false
}

const products = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_PRODUCTS_FETCHING':
      return {
        ...state,
        listFetching: true,
        listFetched: false
      }
    case 'FETCH_PRODUCTS_FETCHED':
      return {
        ...state,
        listFetching: false,
        listFetched: true,
        list: action.payload.list
      }
    case 'VIEW_PRODUCT_FETCHING':
      return {
        ...state,
        productFetching: true,
        productFetched: false
      }
    case 'VIEW_PRODUCT_FETCHED':
      return {
        ...state,
        productFetching: false,
        productFetched: true,
        current: action.payload.current
      }
    default:
      return initialState
  }

}

export default products
