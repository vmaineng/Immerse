class FavoritesController < ApplicationController

    def create
        experience = Experience.find_by(id: params[:id])
        # experience_id: experience.id, user_id: @current_user.id, completed: false
        favorite = Favorite.create!(favorite_params)
        render json: favorite, status: :created
    end

def index
    render json: @current_user.favorites
end

def update
    favorite = Favorite.find_by(id: params[:id])
    favorite.update!(favorite_params)
    render json: favorite
end

def destroy
find_favorite.destroy
head :no_content
end

private
def find_favorite
    Favorite.find(params[:id])
end

def favorite_params
    params.permit(:user_id, :experience_id, :completed)
end

end
