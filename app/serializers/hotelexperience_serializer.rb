class HotelexperienceSerializer < ActiveModel::Serializer
  attributes :id
  has_one :hotel
  has_one :experience
end
