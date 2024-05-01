class CreateRecords < ActiveRecord::Migration[7.1]
  def change
    create_table :records do |t|
      t.integer :match_kanji_count
      t.integer :match_hiragana_count
      t.references :user, null: false, foreign_key: true
      t.references :lyric, null: false, foreign_key: true

      t.timestamps
    end
  end
end
