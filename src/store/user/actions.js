export const SET_ITEM = 'SET_ITEM'

export const setItem = (id, media, number) => ({
  type: SET_ITEM,
  payload: {
    id: id,
    media: media,
    count: number
  },
})