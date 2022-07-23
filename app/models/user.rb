class User < ApplicationRecord
    has_secure_password
    has_many :favorites
    has_many :ratings

    has_many :experiences, through: :favorites
    has_many :experiences, through: :ratings

    validates :username, uniqueness: true
end
