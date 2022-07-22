class Favorite < ApplicationRecord
  belongs_to :user
  belongs_to :experience
  
  validates :user, uniqueness: { scope: :experience_id}
end
