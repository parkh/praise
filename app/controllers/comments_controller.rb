class CommentsController < ApplicationController

  def create
    @comment = Comment.create(comment_params.merge(song_id: params[:song_id]))
  end

  def comment_params
    params.required(:comment).permit(:body, :author)
  end

end