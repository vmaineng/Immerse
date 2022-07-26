class HotelsController < ApplicationController

    def index
        render json: Hotel.all
    end

end
