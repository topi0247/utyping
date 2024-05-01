class CreateRecords < ActiveRecord::Migration[7.1]
  def change
    create_table :records do |t|
      t.integer :match_kanji_count, default: 0
      t.integer :match_hiragana_count, default: 0
      t.string :user_name
      t.references :lyric, null: false, foreign_key: true

      t.timestamps
    end
  end
end
