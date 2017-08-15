import React from 'react'
import { connect } from 'react-redux'

import { fetchProducts } from '../actions/productsActions'

import ProductList from '../components/ProductList/ProductList'
import Loader from '../components/Loader/Loader'
import EmptySearch from '../components/EmptySearch/EmptySearch'

const ListContainer = ({ list, fetched, fetching }) => (
  <div className="content">
    {
      fetched
        ? list.length ? <ProductList products={list} /> :  <EmptySearch />
        : <Loader />
    }
  </div>
)

const mapStateToProps = state => ({
  fetched: state.products.listFetched,
  fetching: state.products.listFetching,
  list: state.products.list
})

const mapDispatchToProps = (dispatch, { location }) => ({
  fetchProducts: dispatch(fetchProducts(location.search))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)
