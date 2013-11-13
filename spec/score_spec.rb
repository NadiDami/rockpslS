require './lib/score'

describe Score do
  let(:score) {Score.new "filename.txt"}
  let(:score2) {Score.new "filename2.txt"}

  it 'has a default score of 0' do
    expect(score.total).to eq 0
  end

  it 'can be reset to 0' do
    score2.total = 5
    score2.reset
    expect(score2.total).to eq 0
  end

  it 'can increase by 1 given a winner' do
    score2.total = 5
    score2.update
    expect(score2.total).to eq 6
  end

  it 'it knows it is at 10' do
    score.total = 10
    expect(score.finished?).to be_true
  end

end