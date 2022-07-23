class ExperiencesController < ApplicationController
    def index
        render json: Experience.all
    end
end
