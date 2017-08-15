import React from 'react'

import { Route } from 'react-router-dom'

import SearchContainer from './containers/SearchContainer'
import ListContainer from './containers/ListContainer'
import ProductContainer from './containers/ProductContainer'


const Routes = () => (
  <div>
    <Route path="/" component={(props) => <SearchContainer {...props} /> }  />
    <Route exact path="/items" query="search" component={(props) => <ListContainer {...props} />} />
    <Route exact path="/items/:id" component={(props) => <ProductContainer {...props} />} />
  </div>
)


export default Routes
