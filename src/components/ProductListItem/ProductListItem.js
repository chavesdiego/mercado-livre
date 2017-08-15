import React from 'react'
import { Link } from 'react-router-dom'

import './ProductListItem.css'

const priceString = (value, countryCode) => value.toLocaleString(countryCode)

const ProductListItem = ({ id, title, price, picture }) => (
  <li className="product-list__item">
    <Link to={`/items/${id}`}>
      <figure>
        <img src={picture} alt={title} title={title} className="product-list__item--image" />
        <figcaption className="product-list__item--info">
          <span className="product-list__item--price">${priceString(price)}</span>
          <span className="product-list__item--title">{title}</span>
        </figcaption>
      </figure>
    </Link>
  </li>
)

export default ProductListItem
