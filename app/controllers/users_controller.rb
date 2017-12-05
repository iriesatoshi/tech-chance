class UsersController < ApplicationController
    def edit
      @user = User.find(params[:id])
    end

    def update
      if current_user.update(user_params)
        redirect_to lessons_path
      else
        render "edit"
      end
    end

    def show
      @user = User.find(params[:id])
    end


  private
  def user_params
    params.require(:user).permit(:name, :email, :student_address, :school_address, :body, :url, :image)
  end
end
