class LessonsController < ApplicationController
  def index
    @users = User.all
  end

  def new
  end

  def create
    @lesson = Lesson.new(lesson_params)
      if @lesson.save
        redirect_to lessons_path
      end
  end

  private

   def lesson_params
     params.require(:lesson).permit(:title,:body,:image).merge(user_id: current_user.id)
   end
end
