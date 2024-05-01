class PlayController < ApplicationController
  def index
    @records = Record.top_record
    @lyrics = Lyric.all
  end

  def show
    @lyric = Lyric.find(params[:id])
  end
end
