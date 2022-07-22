class ExperienceSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :dt_booked_from, :dt_booked_to, :price
  has_one :category
  has_one :location
end
