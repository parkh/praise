import AppDispatcher from 'app_dispatcher'
import Constants from 'constants'
import Api from 'api'

class Actions {
  static addComment(params) {
    Api.post('/songs/1/comments', {
      comment: params
    })
    AppDispatcher.dispatch({
      actionType: Constants.ADD_COMMENT,
      comment: params
    })
  }

  static setComments(params) {
    AppDispatcher.dispatch({
      actionType: Constants.SET_COMMENTS,
      comments: params
    })
  }
}

export default Actions