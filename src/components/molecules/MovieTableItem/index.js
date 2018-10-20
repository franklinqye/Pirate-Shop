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



const MovieTableItem = ({
  id,
  title,
  media,
  price,
  description,
  image,
  addItem
}) => {
  return (
    <RowStyle className="row py-3">
      <div className="col-3 my-auto">
        <ImageStyle className="mx-5" src={image}/>
      </div>
      <div className="col-7">
        <div className="row">
          <div className="col-10">
            <h4>{ title }</h4>
          </div>
          <div className="col-2 text-right">
            <h5>{ `$${price}` }</h5>
          </div>
          <div className="col-12">
            <h5>{ `(${media})` }</h5>
          </div>
          <div className="col-12">
            <TextStyle>{ description }</TextStyle>
          </div>
        </div>
      </div>
      <div className="col-2 my-auto mx-auto">
        <button type="button" className="btn btn-primary" onClick={() => addItem(id, media) }>{ blockCopy.button }</button>
      </div>
    </RowStyle>
  )
}

const blockCopy = {
  button: "Buy"
}

MovieTableItem.proptypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  media: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  addItem: PropTypes.func.isRequired
}

export default MovieTableItem
