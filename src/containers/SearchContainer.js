import React from 'react'
import { connect } from 'react-redux'

import Searchbar from '../components/Searchbar/Searchbar'

const doSearch = ({ dispatch, history }) => e => {
  e.preventDefault()

  dispatch({type: 'FETCH_PRODUCTS_FETCHING'})
  history.push(`/items?search=${e.target.query.value}`)
}

const SearchContainer = props => (
  <Searchbar onSearch={doSearch(props)} />
)


export default connect(null)(SearchContainer)
