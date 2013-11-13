require 'sinatra'
# require './lib/score'


get '/' do 
  # reset_scorers
  erb :index
end

# post '/score' do
#   setup_scorers
#   if params[:winner] == 'you'
#     @your_score.update
#     return "#{@your_score.total}"
#   elsif params[:winner] == 'computer'
#     @computer_score.update
#     return "#{@computer_score.total}"
#   end

# end

# def setup_scorers
#   @your_score = Score.new 'your_score.txt'
#   @computer_score = Score.new 'computer_score.txt'
# end

# def reset_scorers
#   IO.write('your_score.txt', 0)
#   IO.write('computer_score.txt', 0)
# end