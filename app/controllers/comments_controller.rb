class CommentsController < ApplicationController
  def create
    @comment = Comment.create(comment_params.merge(song_id: params[:song_id]))
  end

  def upvote
    Comment.upvote(params[:comment_id])
    @comment = Comment.find(params[:comment_id])
    render :create
  end

  def comment_params
    params.required(:comment).permit(:body, :author, :parent_id, :comment_id)
  end
end