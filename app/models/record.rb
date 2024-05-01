class Record < ApplicationRecord
  belongs_to :user

  def self.top_record
    records = Record.includes(:user, :lyric).order(match_kanji_count: :desc).limit(3)
    top_kanji_records = records.group_by(&:lyric)
    top_kanji_records.map do |lyric, records|
      {
        title: lyric.title,
        genre: lyric.genre,
        ranking: records.map do |record|
          {
            user_id: record.user_id,
            name: record.user.name,
            score_kanji: record.match_kanji_count / lyric.kanji_char_count,
          }
        end
      }
    end
  end
end
