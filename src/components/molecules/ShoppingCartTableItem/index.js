import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const RowStyle = styled.div`
  background-color: white;
  transition: .15s
  height: 150px;
  &:hover {
    background-color: #edfff7;
  }`


const TextStyle = styled.p`
  height: 3em;
  overflow: hidden;
  display: block;
  text-overflow: ellipsis;
`

const ImageStyle = styled.img`
  max-height: 125px;
  max-width: 125px;
`



const ShoppingCartTableItem = ({
  id,
  title,
  media,
  price,
  description,
  image,
  setItem,
  count
}) => {
  const adjustCount = (id, media, amount) => {
    if (count + amount >= 0) {
      setItem(id, media, amount)
    }
  }
  return (
    <RowStyle className="row py-3">
      <div className="col-2 my-auto">
        <ImageStyle className="mx-2" src={image}/>
      </div>
      <div className="col-4">
        <div className="row">
          <div className="col-8">
            <h4>{ title }</h4>
          </div>
          <div className="col-4 text-right">
            <h5>{ `$${price}` }</h5>
          </div>
          <div className="col-12">
            <h5>{ `(${media})` }</h5>
          </div>
        </div>
      </div>
      <div className="col-2 my-auto mx-auto">
        <div className="row">
          <div className="col-6 text-right my-auto">
            <button>{ count }</button>
          </div>
          <div className="col-6 ">
            <div className="row">
              <div className="col-12">
                <button type="button" className="btn btn-primary" onClick={() => adjustCount(id, media, 1) } style={{width: '40px'}}>{ blockCopy.buttonUp }</button>
              </div>
              <div className="col-12">
                <button type="button" className="btn btn-primary" onClick={() => adjustCount(id, media, -1) } style={{width: '40px'}}>{ blockCopy.buttonDown }</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-2 my-auto mx-auto">
        <button type="button" className="btn btn-danger" onClick={() => setItem(id, media, -1* count) }>{ blockCopy.buttonRemove }</button>
      </div>
      <div className="col-2 my-auto mx-auto">
        <h5>{ `$${count*price}`}</h5>
      </div>
    </RowStyle>
  )
}

const blockCopy = {
  buttonUp: "+",
  buttonDown: "-",
  buttonRemove: "REMOVE"
}

ShoppingCartTableItem.proptypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  media: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  setItem: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired
}

export default ShoppingCartTableItem
