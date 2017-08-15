import React from 'react'
import './Header.css'

const Header = ({ children }) => (
  <header className="header">
    <div className="header__content">
      <h1 className="logo">
        <a href="/">Mercado Livre</a>
      </h1>
      {children}
    </div>
  </header>
)

export default Header
