export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_USER_FLATS_SUCCESS':
      return {
        user: Object.assign(
          {},
          state.user,
          {
            flats: action.flats
          }
        )
      }

    case 'LOGIN_SUCCESS':
      return {user: action.user}

    case 'LOGOUT_SUCCESS':
      return {}

    default:
      return state
  }
}
