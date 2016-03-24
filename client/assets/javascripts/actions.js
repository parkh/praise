import AppDispatcher from './app_dispatcher'
import Constants from './constants'
import Api from './api'

class Actions {

  constructor(songId) {
    this.songId = songId
    this.watchInterval = setInterval(this.watch.bind(this), 1000)
  }

  setComments(params) {
    AppDispatcher.dispatch({
      actionType: Constants.SET_COMMENTS,
      comments: params
    })
  }

  upvoteComment(comment) {
    Api.put(`/songs/${this.songId}/comments/${comment.id}/upvote`).then( comment => {
      AppDispatcher.dispatch({
        actionType: Constants.UPVOTE_COMMENT,
        comment: comment
      })
    })
  }

  addComment(params) {
    Api.post(`/songs/${this.songId}/comments`, {
      comment: params
    }).then( comment => {
      AppDispatcher.dispatch({
        actionType: Constants.ADD_COMMENT,
        comment: comment
      })
    })
  }

  watch() {
    Api.get(`/songs/${this.songId}/comments`).then( comments => {
      this.setComments(comments)
    })
  }
}

export default Actions