class Hotel < ApplicationRecord
    has_many :hotelexperiences
    has_many :experiences, through: :hotelexperiences
end
