require 'rails_helper'

describe Comment do
  let( :song ) { Song.create( author: 'Me', title: '001' ) }
  let( :parent_comment ) { Comment.create!( body: 'parent', song: song ) }
  let!( :child_comment ) { Comment.create!( body: 'child', parent: parent_comment, song: song ) }

  it 'has parent/child relationships' do
    expect( parent_comment.children.first ).to eq( child_comment )
  end

  it 'upvotes' do
    Comment.upvote( child_comment.id )
    expect( child_comment.reload.rank ).to eq(1)
  end

  it 'has a default value of 0 for rank' do
    expect( parent_comment.rank ).to eq(0)
  end
end