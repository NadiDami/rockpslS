require 'sinatra'

get '/' do 
  IO.write('your_score.txt', 0)
  IO.write('computer_score.txt', 0)
  erb :index
end

post '/score' do
  you_current_score = IO.read('your_score.txt').to_i
  computer_current_score = IO.read('computer_score.txt').to_i

  if params[:winner] == 'you'
    you_current_score += 1
    IO.write('your_score.txt', "#{you_current_score}")
    return "#{you_current_score}"
  elsif params[:winner] == 'computer'
    computer_current_score += 1
    IO.write('computer_score.txt', "#{computer_current_score}")
    return "#{computer_current_score}"
  else
    you_current_score += 0
    computer_current_score += 0
  end
end