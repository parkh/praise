import AppDispatcher from 'app_dispatcher'
import Constants from 'constants'

class CommentStore extends EventEmitter {

  constructor() {
    super()
    this._comments = []

    AppDispatcher.register((payload) => {
      switch(payload.actionType) {
        case Constants.SET_COMMENTS:
          this.setComments(payload.comments)
          this.emitChange()
          break
        case Constants.UPVOTE_COMMENT:
          this.upvoteComment(payload.comment)
          this.emitChange()
          break
        case Constants.ADD_COMMENT:
          this.addComment(payload.comment)
          this.emitChange()
          break
        default:
          // NO-OP
      }
    })
  }

  addComment (comment)  {
    this._comments[comment.id || this._comments.length ] = comment
  }

  setComments (comments) {
    comments.forEach(comment => {
      this.addComment(comment)
    })
  }

  upvoteComment (comment) {
    this._comments[comment.id].rank++
  }

  comments (parentId) {
    return _.chain(this._comments.filter( c => { return c && c.parent_id === parentId }))
            .sortBy('rank')
            .reverse()
            .value()
  }

  addChangeListener (callback) {
    this.on(Constants.CHANGE_EVENT, callback)
  }

  removeChangeListener (callback) {
    this.removeListener(Constants.CHANGE_EVENT, callback)
  }

  emitChange () {
    this.emit(Constants.CHANGE_EVENT)
  }
}

export default CommentStore