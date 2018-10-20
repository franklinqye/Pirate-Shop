import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { MovieTableItem } from 'components'
import styled from 'styled-components'

class MovieTable extends React.Component {
  constructor(props) {
    super(props)
    // this.state = { page: 0 }
    // this.changePage = this.changePage.bind(this)
  }

  // changePage(page) {
  //   if (page)
  // }

  render() {
    const generateComponent = movieId => (
      this.props.movies[movieId].medias.map(mediaId => (
        <div key={ `${movieId}${mediaId}` } className="col-12">
          <MovieTableItem 
            id={this.props.movies[movieId].id}
            title={this.props.movies[movieId].title}
            media={this.props.media[mediaId].type}
            price={this.props.media[mediaId].price}
            description={this.props.movies[movieId].description}
            image={this.props.movies[movieId].image}
            addItem={this.props.addItem}
          />
        </div>
      ))
    )
    return (
      <div>
        <h2>{ blockCopy.title }</h2>
        <div className="container-fluid card">
          <div className="row">
            {this.props.mids.map(id => <span key={id}>{ generateComponent(id) }</span>)
            }
          </div>
        </div>
      </div>
    )
  }

}

const blockCopy = {
  title: "MOIVES",
}

MovieTable.propTypes = {
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
  addItem: PropTypes.func.isRequired
}

export default MovieTable
