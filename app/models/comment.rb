class Comment < ActiveRecord::Base
  belongs_to :song
  validates :song, presence: true
  has_ancestry

  def self.upvote(id)
    comment = find(id)
    comment.update_attributes(rank: comment.rank.to_i + 1)
  end
end