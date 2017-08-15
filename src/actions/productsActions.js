export const fetchProducts = query => dispatch => {

  fetch(`http://localhost:3001/api/items${query}`)
    .then(response => response.json())
    .then(list => {
      dispatch({
        type: 'FETCH_PRODUCTS_FETCHED',
        payload: { list: list.items }
      })
    })

}

export const viewProduct = id => dispatch => {
  dispatch({ type: 'VIEW_PRODUCT_FETCHING' })

  fetch(`http://localhost:3001/api/items/${id}`)
    .then(response => response.json())
    .then(product => {
      dispatch({
        type: 'VIEW_PRODUCT_FETCHED',
        payload: { current: product }
      })
    })

}
