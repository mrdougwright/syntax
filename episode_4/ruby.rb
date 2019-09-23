class MyRuby
  attr_accessor :arg

  def initialize(arg)
    self.arg = arg
  end

  # instance methods
  def add_two num
    2 + num
  end

  def map_and_two list
    list.map do |num|
      add_two(num)
    end
  end

  def self.cap word
    word.capitalize
  end
end

# to use:
# irb
# load "ruby.rb"

# m = MyRuby.new("fake args")
# m.add_two(4)
# MyRuby.cap("capitalize me please")
