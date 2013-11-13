class Score

  def initialize(player,filename)
    @player = player
    @filename = filename
    begin
      @total = IO.read(@filename).to_i
    rescue Errno::ENOENT
      @total = 0
      raise "new file"
    end
      save
  end

  def total
    @total 
  end

  def total= total
    @total = total
  end

  def reset
    @total = 0
    save
  end

  def update_with_winner(name)
    update if player == name
  end

  def update
    @total += 1
    save
  end

  def finished?
    total == 10
  end

  def save
    IO.write(@filename, @total)
  end

end