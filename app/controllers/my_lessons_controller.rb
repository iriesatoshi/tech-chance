class MyLessonsController < ApplicationController
  def index
  end

  def create
    @my_lesson = MyLesson.new(user_id: current_user.id,lesson_id: params[:id])
    @my_lesson.save
      @lesson = Lesson.find(params[:id])
      @user = User.find(@lesson.user)
      @user.update(my_lesson_sum: @user.my_lesson_sum += 1)
    redirect_to my_lessons_path
  end

  def destroy
    @my_lesson = MyLesson.find_by(user_id: current_user.id, lesson_id: params[:id])
    @my_lesson.destroy
      @lesson = Lesson.find(params[:id])
      @user = User.find(@lesson.user)
      @user.update(my_lesson_sum: @user.my_lesson_sum -= 1)
    redirect_to my_lessons_path
  end

end
