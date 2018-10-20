import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ShoppingCartTableItem } from 'components'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

class ShoppingCartTable extends React.Component {
  constructor(props) {
    super(props)
    // this.state = { page: 0 }
    // this.changePage = this.changePage.bind(this)
  }

  // changePage(page) {
  //   if (page)
  // }

  render() {
    const calculateTotal = () => {
      var keys = Object.keys(this.props.moviesSelected)
      const mediaTypes = this.props.mediaIds.map(id => this.props.media[id])
      var count = 0
      var amount = 0
      if (!keys || !keys.length) {
        return {count: count, amount: amount, discount: null}
      }
      const mediaCounter = {}
      mediaTypes.map(media => {
        mediaCounter[media.type] = {}
        mediaCounter[media.type].price = media.price
        mediaCounter[media.type].count = 0
      })
      for (var i = keys.length - 1; i >= 0; i--) {
        const movie = this.props.moviesSelected[keys[i]]
        mediaTypes.map(media => {
          if (movie[media.type]) {
            count += movie[media.type]
            amount += movie[media.type] * media.price
            mediaCounter[media.type].count += 1
          }
        })
      }
      Object.keys(mediaCounter).map(key => {
        if (mediaCounter[key].count >= blockCopy.discountThreshold) {
          mediaCounter[key].discount = mediaCounter[key].price * mediaCounter[key].count * 0.1
        }
      })
      console.log(mediaCounter)
      return {count: count, amount: amount, discount: mediaCounter}
    }
    var {count, amount, discount} = calculateTotal()
    const generateComponent = movieId => (
      this.props.movies[movieId].medias.map(mediaId => {
        if (this.props.moviesSelected && this.props.moviesSelected[movieId] && this.props.moviesSelected[movieId][this.props.media[mediaId].type]) {
          return (
            <div key={ `${movieId}${mediaId}cart` } className="col-12">
              <ShoppingCartTableItem 
                id={this.props.movies[movieId].id}
                title={this.props.movies[movieId].title}
                media={this.props.media[mediaId].type}
                price={this.props.media[mediaId].price}
                image={this.props.movies[movieId].image}
                setItem={(id, media, amount) => {
                  this.forceUpdate()
                  this.props.setItem(id, media, amount)}
                }
                count={this.props.moviesSelected[movieId][this.props.media[mediaId].type]}
              />
            </div>
          )
        }
      })
    )
    return (
      <div>
        <h2>{ blockCopy.title }</h2>
        <div className="container-fluid card py-3">
          <div className="row my-4">
            {this.props.mids.map(id => <span key={id}>{ generateComponent(id) }</span>)
            }
          </div>
          <div className="row">
            <div className="col-10 text-right">
              <h4> {blockCopy.endText1} </h4>
            </div>
            <div className="col-2 text-right">
              <h4> {count} </h4>
            </div>
          </div>
          { discount ? this.props.mediaIds.map(mediaId => {
            const type = this.props.media[mediaId].type
            if (discount[type].discount) {
              amount -= discount[type].discount
              return (
                <div className="row">
                  <div className="col-10 text-right">
                    <h4> { `${blockCopy.discountText} ${type}` } </h4>
                  </div>
                  <div className="col-2 text-right" style={{color: 'red'}}>
                    <h4> {`-$${discount[type].discount}`} </h4>
                  </div>
                </div>
              )
            }
          }) : null}
          <div className="row">
            <div className="col-10 text-right">
              <h4> {blockCopy.endText2} </h4>
            </div>
            <div className="col-2 text-right">
              <h4> {`$${amount}`} </h4>
            </div>
          </div>
          <div className="row">
            <div className="col-10 text-right">
            </div>
            <div className="col-2 text-right">
              <Link to="#"><button type="button" className="btn btn-info" >{ blockCopy.endButton }</button></Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

const blockCopy = {
  title: "You Cart",
  endText2: "Total:",
  endText1: "Number Items in Cart: ",
  endButton: "CheckOut",
  discountThreshold: 3,
  discountText: "(One-Time) 10% off for purchasing (3) types of"
}

ShoppingCartTable.propTypes = {
  mids: PropTypes.arrayOf(PropTypes.number.isRequired),
  movies: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    medias: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    description: PropTypes.string,
    image: PropTypes.string
  })),
  mediaIds: PropTypes.PropTypes.arrayOf(PropTypes.number.isRequired),
  media: PropTypes.objectOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    price: PropTypes.number
  })),

  moviesSelected: PropTypes.objectOf(PropTypes.object),
  setItem: PropTypes.func.isRequired
}

export default ShoppingCartTable
