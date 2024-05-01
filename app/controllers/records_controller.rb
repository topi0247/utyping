class RecordsController < ApplicationController
  def create
    record = Record.new(record_params)
    record.save!
    redirect_to root_path
  end

  private

  def record_params
    params.require(:record).permit(:match_kanji_count, :match_hiragana_count, :user_name, :lyric_id)
  end
end
