import { initialState } from './selectors'
import { SET_ITEM } from './actions'
import { fromMovies } from 'store/selectors'

export default (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case SET_ITEM:
      var newState = {...state}
      if (newState.moviesSelected[payload.id]) {
        const target = newState.moviesSelected[payload.id][payload.media]
        newState.moviesSelected[payload.id][payload.media] = target ? target + payload.count : payload.count
      } else {
        newState.moviesSelected[payload.id] = {}
        const mediaObject = fromMovies.getMedia(state)
        
        const mediaTypes = fromMovies.getMediaIds(state).map(id => mediaObject[id].type)
        for (var i = mediaTypes.length - 1; i >= 0; i--) {
          if (mediaTypes[i] == payload.media) {
            newState.moviesSelected[payload.id][mediaTypes[i]] = payload.count
          } else {
            newState.moviesSelected[payload.id][mediaTypes[i]] = 0
          }
        }
      }
      newState.movieCount += payload.count
      return newState
    default:
      return state
  }
}
