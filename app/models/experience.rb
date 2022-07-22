class Experience < ApplicationRecord
  belongs_to :category
  belongs_to :location
  has_many :ratings
end
