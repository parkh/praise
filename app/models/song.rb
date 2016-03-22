class Song < ActiveRecord::Base
  has_many :comments

  def to_s
    "#{ author } - #{ title }"
  end
end
