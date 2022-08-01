class RatingsController < ApplicationController

def index
    render json: @current_user.ratings
end

def create
    experience = Experience.find_by(id: params[:experience_id])
    # byebug
    rating = Rating.new()
   rating.user_id = @current_user.id
   rating.experience_id = experience.id
   rating.save
    # rating = Rating.create!( rating_params)
    render json: rating, status: :created
end

def update
    rating = Rating.find_by(id: params[:id])
    rating.update!(rating_params)
    render json: rating
end

def destroy
    # byebug
    find_rating.destroy
    head :no_content
end


private

def find_rating
    Rating.find(params[:id])
   
end

def rating_params
    params.permit(:experience_id, :user_id, :rating)
end


end
