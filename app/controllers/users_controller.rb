class UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user
    else
      render json: error_or_something_idk
    end
  end

  def destroy
    @user = User.find(params[:id])

    if @user.destroy
      render json: @user
    else
      render json: error_or_something_idk
    end
  end

  def show
    @user = User.find(params[:id])
  end

  private

    def user_params
      params.require(:user).permit(:username, :password)
    end

end
