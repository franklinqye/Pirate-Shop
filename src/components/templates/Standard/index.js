import React from 'react'

const Standard = ({
  header,
  children,
  footer
}) => {
  const banner = header ? <div className="col-12"> { header } </div> : null
  const tail = footer ? <div className="col-12"> { footer } </div> : null
  return (
    <div className="row mx-0">
  	  { banner }

  		<div className="col-12" style={{margin: '100px 0'}}>
  	   { children }
    	</div>

      { tail }
  	</div>
  )
}

export default Standard
