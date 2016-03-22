class Comment < ActiveRecord::Base
  belongs_to :song
  validates :song, presence: true
  has_ancestry
end