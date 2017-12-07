class LessonsController < ApplicationController
  before_action :authenticate_user!
  def index
    @users = User.all.order('my_lesson_sum DESC').page(params[:page]).per(3)
    lesson_ids = MyLesson.group(:lesson_id).order('count_lesson_id DESC').count(:lesson_id).keys
    @lessons = Lesson.where(id: lesson_ids).order("FIELD(id, #{lesson_ids.join(',')})").page(params[:page]).per(2)
  end

  def index_newest
    @users = User.all.order('my_lesson_sum DESC').page(params[:page]).per(3)
    @lessons = Lesson.all.order('created_at DESC').page(params[:page]).per(2)
    render "lessons/index"
 end

  def show
    @lesson = Lesson.find(params[:id])
  end

  def new
    @lesson = Lesson.new
  end

  def create
    @lesson = Lesson.new(lesson_params)
      if @lesson.save
        @my_lesson = MyLesson.new(user_id: current_user.id, lesson_id: @lesson.id)
        @my_lesson.save
        current_user.update(my_lesson_sum: current_user.my_lesson_sum += 1)
        redirect_to lessons_path
      end
  end

  def edit
    @lesson = Lesson.find(params[:id])
  end

  def update
    @lesson = Lesson.find(params[:id])
      if @lesson.user_id==current_user.id
        @lesson.update(lesson_params)
        redirect_to lessons_path
      else
        render "edit"
      end
  end

  def destroy
    @lesson = Lesson.find(params[:id])
      if @lesson.user_id==current_user.id
        @lesson.destroy
        current_user.update(my_lesson_sum: current_user.my_lesson_sum -= 1)
        redirect_to lessons_path
      else
        render "show"
      end
  end

  private

   def lesson_params
     params.require(:lesson).permit(:title,:body,:image).merge(user_id: current_user.id)
   end
end
