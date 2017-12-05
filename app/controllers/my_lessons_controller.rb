class MyLessonsController < ApplicationController
  def index
  end

  def create
    @my_lesson = MyLesson.new(user_id: current_user.id,lesson_id: params[:id])
    @my_lesson.save
    redirect_to my_lessons_path
  end

  def destroy
    @my_lesson = MyLesson.find_by(user_id: current_user.id, lesson_id: params[:id])
    @my_lesson.destroy
    redirect_to my_lessons_path
  end

end
