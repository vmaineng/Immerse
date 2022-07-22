class Experience < ApplicationRecord
  belongs_to :category
  belongs_to :location
  has_many :ratings
  has_many :favorites
  has_many :users, through: :ratings
  has_many :users, through: :favorites
end
