class ExperiencesController < ApplicationController
    def index
        render json: Experience.all, include: 'rating.experience'
    end
end
