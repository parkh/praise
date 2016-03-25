require 'rails_helper'

describe Song do
  it 'returns "author - title" when to_s is called' do
    s = Song.new( author: 'Nirvana', title: 'In Bloom' )
    expect("#{s}").to eq 'Nirvana - In Bloom'
  end
end