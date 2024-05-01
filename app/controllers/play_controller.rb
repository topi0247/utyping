class PlayController < ApplicationController
  def index
    @songs = Lyric.includes(:records).map do |song|
      {
        id: song.id,
        title: song.title,
        genre: song.genre,
        ranking: song.records.order(match_hiragana_count: :desc).limit(3).map do |record|
          {
            user_name: record.user_name,
            score_hiragana: ((record.match_hiragana_count.to_f / song.hiragana_char_count.to_f) * 100).to_i,
          }
        end
      }
    end
  end

  def show
    @lyric = Lyric.find(params[:id])
    @record = Record.new(lyric: @lyric)
    @hiragana = @lyric.data.map { |d| d["hiragana"] }.join().split('').group_by(&:itself).map { |k, v| [k, v.size] }.to_h
  end
end
