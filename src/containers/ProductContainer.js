import React from 'react'
import { connect } from 'react-redux'

import { viewProduct } from '../actions/productsActions'

import ProductViewItem from '../components/ProductViewItem/ProductViewItem'
import Loader from '../components/Loader/Loader'

const ProductContainer = ({ fetched, fetching, product }) => (
  <div className="content">
    {
      fetched
        ? <ProductViewItem
            title={product.item.title}
            picture={product.picture}
            price={product.item.price}
            description={product.description}/>
        : <Loader />
    }
  </div>

)

const mapStateToProps = state => ({
  fetched: state.products.productFetched,
  fetching: state.products.productFetching,
  product: state.products.current
})

const mapDispatchToProps = (dispatch, { match }) => ({
  viewProduct: dispatch(viewProduct(match.params.id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer)
