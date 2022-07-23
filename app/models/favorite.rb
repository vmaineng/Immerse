class Favorite < ApplicationRecord
  belongs_to :user
  belongs_to :experience

  has_many :categories, through: :experience
has_many :locations, through: :experience
  
  validates :user, uniqueness: { scope: :experience_id}
end
