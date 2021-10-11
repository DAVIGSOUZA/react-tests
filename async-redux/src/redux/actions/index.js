import api from '../../api'

// async action with redux thunk sintax
export const getPosts = () => async dispatch => {
  const response = await api.get('./posts')
  dispatch({
    type: 'GET_POSTS',
    payload: response.data
  })
}

export const getUser = (userId) => async dispatch => {
  const response = await api.get(`/users/${userId}`)
  dispatch({
    type: 'GET_USER',
    payload: response.data
  })
}

export const getPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(getPosts())
  const usersId = []
  getState().posts.forEach(post => {
    if (!usersId.includes(post.userId)) {
      usersId.push(post.userId)
    }
  });
  usersId.forEach(id => dispatch(getUser(id)))
}