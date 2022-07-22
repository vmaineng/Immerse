class RatingsController < ApplicationController

def index
    render json: @current_user.ratings
end

def create
    # experience = Experience.find_by(id: params[:id])
    rating = Rating.create!(rating_params)
    render json: rating, status: :created
end

def update
    rating = Rating.find_by(id: params[:id])
    rating.update(rating_params)
    render json: rating, status: :updated
end

def destroy
    find_rating.destroy
    head :no_content
end



private

def find_rating
    Rating.find(params[:id])
end

def rating_params
    params.permit(:rating, :user_id, :experience_id)
end

end
