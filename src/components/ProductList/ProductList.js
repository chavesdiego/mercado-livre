import React from 'react'

import './ProductList.css'

import ProductListItem from '../ProductListItem/ProductListItem'


const ProductList = ({ products }) => (
  <ul className="product-list">
    {products.map(product =>
      <ProductListItem
        key={product.id}
        id={product.id}
        title={product.title}
        picture={product.thumbnail}
        price={product.price} />
     )}
  </ul>
)

export default ProductList
