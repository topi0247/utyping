class CreateLyrics < ActiveRecord::Migration[7.1]
  def change
    create_table :lyrics do |t|
      t.string :title
      t.string :uid
      t.json :data
      t.integer :kanji_char_count
      t.integer :hiragana_char_count
      t.string :genre

      t.timestamps
    end
    add_index :lyrics, :uid, unique: true
    add_index :lyrics, :title
  end
end
