# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_05_01_062127) do
  create_table "lyrics", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "title"
    t.string "uid"
    t.json "data"
    t.integer "kanji_char_count"
    t.integer "hiragana_char_count"
    t.string "genre"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["title"], name: "index_lyrics_on_title"
    t.index ["uid"], name: "index_lyrics_on_uid", unique: true
  end

  create_table "records", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.integer "match_kanji_count", default: 0
    t.integer "match_hiragana_count", default: 0
    t.string "user_name"
    t.bigint "lyric_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["lyric_id"], name: "index_records_on_lyric_id"
  end

  add_foreign_key "records", "lyrics"
end
