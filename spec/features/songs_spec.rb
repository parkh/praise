require 'rails_helper'

describe 'songs', js: true do
  let( :song_name ) { 'Nirvana - In Bloom' }
  let!( :song ) { Song.create( author: 'Nirvana', title: 'In Bloom' ) }

  it 'lists songs' do
    visit '/'
    expect( page ).to have_content( song_name )
  end
end