import React from 'react'
import { connect } from 'react-redux'
import { Header } from 'components'
import { fromUser } from 'store/selectors'

const HeaderContainer = props => <Header {...props} />

const mapStateToProps = state => ({
  movieCount: fromUser.getMovieCount(state)
})

// const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps)(HeaderContainer)
