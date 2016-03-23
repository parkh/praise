import AppDispatcher from 'app_dispatcher'
import Constants from 'constants'
import Api from 'api'

class Actions {
  static addComment(params) {
    Api.post('/songs/1/comments', {
      comment: params
    }).then( resp => {
      return resp.json()
    }).then( comment => {
      AppDispatcher.dispatch({
        actionType: Constants.ADD_COMMENT,
        comment: params
      })
    })
  }

  static upvoteComment(comment) {
    Api.put(`/songs/1/comments/${comment.id}/upvote`).then( resp => {
      return resp.json()
    }).then( comment => {
      AppDispatcher.dispatch({
        actionType: Constants.UPVOTE_COMMENT,
        comment: comment
      })
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