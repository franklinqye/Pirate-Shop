import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'

import { Catalogue, ShoppingCart, CheckOut } from 'components'

import theme from './themes/default'

injectGlobal`
  body {
    margin: 0;
  }
`

const App = () => {
  return (
    <div>
      <Helmet titleTemplate="ARc - %s">
        <title>Piratial-Liz's Bay.com</title>
        <meta name="description" content="Buy Movies for Cheap!" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:site_name" content="Piratial-Liz's Bay.com" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <script src="/js/bootstrap.min.js" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/" component={Catalogue} exact />
          <Route path="/shopping-cart" component={ShoppingCart} exact />
          <Route path="/checkout" component={Catalogue} exact />
        </Switch>
      </ThemeProvider>
    </div>
  )
}

export default App
