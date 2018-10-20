import React from 'react'
import { connect } from 'react-redux'
import { ShoppingCartTable } from 'components'
import { fromMovies, fromUser } from 'store/selectors'
import { setItem } from 'store/actions'


const ShoppingCartTableContainer = props => <ShoppingCartTable {...props} />

const mapStateToProps = state => ({
  mids: fromMovies.getMids(state),
  movies: fromMovies.getMovies(state),
  mediaIds: fromMovies.getMediaIds(state),
  media: fromMovies.getMedia(state),
  moviesSelected: fromUser.getMoviesSelected(state)
})

const mapDispatchToProps = dispatch => ({
  setItem: (id, media, count) => dispatch(setItem(id, media, count)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTableContainer)
