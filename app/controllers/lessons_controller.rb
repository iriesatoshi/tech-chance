class LessonsController < ApplicationController
  def index
    @users = User.all
    @lessons = Lesson.all
  end

  def new
    @lesson = Lesson.new
  end

  def create
    @lesson = Lesson.new(lesson_params)
      if @lesson.save
        redirect_to lessons_path
      end
  end

  def edit
    @lesson = Lesson.find(params[:id])
  end

  def update
    @lesson = Lesson.find(params[:id])
      if @lesson.update(lesson_params)
        redirect_to lessons_path
      else
        render "edit"
      end
  end

  def destroy
    @lesson = Lesson.find(params[:id])
      if @lesson.destroy
        redirect_to lessons_path
      end
  end

  private

   def lesson_params
     params.require(:lesson).permit(:title,:body,:image).merge(user_id: current_user.id)
   end
end
