import React from 'react'
import { Standard, Header } from 'components'
import { ShoppingCartTableContainer, HeaderContainer } from 'containers'

const ShoppingCart = () => {
  return (
    <Standard header={ <HeaderContainer/> }>
    	<div className="container-fluid" style={{maxWidth: '800px'}}>
  		  {<ShoppingCartTableContainer />}
    	</div>
  	</Standard>
  )
}

export default ShoppingCart
