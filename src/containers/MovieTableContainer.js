import React from 'react'
import { connect } from 'react-redux'
import { MovieTable } from 'components'
import { fromMovies } from 'store/selectors'
import { setItem } from 'store/actions'


const MovieTableContainer = props => <MovieTable {...props} />

const mapStateToProps = state => ({
  mids: fromMovies.getMids(state),
  movies: fromMovies.getMovies(state),
  mediaIds: fromMovies.getMediaIds(state),
  media: fromMovies.getMedia(state),
  component: "catalogue"
})

const mapDispatchToProps = dispatch => ({
  addItem: (id, media) => dispatch(setItem(id, media, 1)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieTableContainer)
