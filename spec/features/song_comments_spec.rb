require 'rails_helper'

describe 'song-comments', js: true do
  let( :song_name ) { 'Nirvana - In Bloom' }
  let!( :song ) { Song.create( author: 'Nirvana', title: 'In Bloom', lyric: 'I am the one and only' )}

  context 'new comments' do
    before do
      visit song_path( song )
    end

    it 'shows song lyrics' do
      expect(page).to have_content( 'I am the one and only' )
    end

    it 'add comments' do
      within '.row form' do
        fill_in :author, with: 'John'
        fill_in :body, with: 'Nice song!'
        find_button( 'Submit' ).click()
      end
      sleep 1
      expect( Comment.all.size ).to eq(1)
      expect( page.body ).to have_content( 'Nice song!' )
    end
  end

  context 'replies' do
    let!( :comment ) { Comment.create( author: 'DP', body: 'It\'s so sad...', song: song ) }

    it 'upvotes', :focus do
      visit song_path( song )
      find_button('+1').click()
      sleep 1
      expect( find('.comment.row .label.secondary.right')).to have_text '1'
    end
  end

  context 'polling comments' do
    let!( :comment ) { Comment.create( author: 'DP', body: 'It\'s so sad...', song: song ) }
    it 'updates via long polling' do
      visit song_path( song )
      Comment.create!( author: 'Andrew', body: 'I disagree', song: song, parent: comment )
      sleep 1
      expect( page ).to have_content 'I disagree'
      expect( page ).to have_content 'Andrew'
    end
  end

end