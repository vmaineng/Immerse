class Rating < ApplicationRecord
  belongs_to :user
  belongs_to :experience

has_many :categories
has_many :locations

validates :user, uniqueness: { scope: :experience_id}
end
