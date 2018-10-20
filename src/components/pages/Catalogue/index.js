import React from 'react'
import { Standard, Header } from 'components'
import { MovieTableContainer, HeaderContainer } from 'containers'

const Catalogue = () => {
  return (
    <Standard header={ <HeaderContainer/> }>
    	<div className="container-fluid" style={{maxWidth: '800px'}}>
  		  {<MovieTableContainer />}
    	</div>
  	</Standard>
  )
}

export default Catalogue
