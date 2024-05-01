class Lyric < ApplicationRecord
  has_many :records, dependent: :destroy
end
