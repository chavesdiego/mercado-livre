import React from 'react'

import './ProductViewItem.css'

const priceString = (value, countryCode) => value.toLocaleString(countryCode)

const ProductViewItem = ({ title, picture, price, description }) => (
  <div className="product-view-item">

    <div className="product-view-item__image">
      <img src={picture.url}  alt={title} title={title} />
    </div>

    <div className="product-view-item__info">
      <h2 className="product-view-item__info--title">{title}</h2>
      <span className="product-view-item__info--price">
        ${priceString(price.amount)}
        <span className="decimals">{price.decimals}</span>
      </span>

      <button className="product-view-item__buy-button">Comprar</button>
    </div>

    <div className="product-view-item__description">
      <h3>Descrição do produto</h3>
      <p dangerouslySetInnerHTML={{ __html: description }}></p>
    </div>
  </div>
)

export default ProductViewItem
