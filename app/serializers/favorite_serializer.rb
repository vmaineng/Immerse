class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :completed
  has_one :user
  has_one :experience
end
