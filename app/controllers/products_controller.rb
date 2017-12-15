class ProductsController < ApplicationController
  before_action :authenticate_user!
  def new
    @product = Product.new
    @lesson = Lesson.find(params[:lesson_id])
  end

  def show
    @product = Product.find(params[:id])
    @lesson = Lesson.find(params[:lesson_id])
  end

  def create
    @product = Product.new(product_params)
    @lesson = Lesson.find(params[:lesson_id])
      if @product.save
        redirect_to lesson_path(@lesson.id)
      else
        redirect_to root_path
      end
  end

  def edit
    @product = Product.find(params[:id])
    @lesson = Lesson.find(params[:lesson_id])
  end

  def update
    @product = Product.find(params[:id])
    @lesson = Lesson.find(params[:lesson_id])
      if @product.lesson.user_id==current_user.id
        @product.update(product_params)
        redirect_to lesson_path(@lesson.id)
      else
        render "edit"
      end
  end

  def destroy
    @product = Product.find(params[:id])
    @lesson = Lesson.find(params[:lesson_id])
      if @product.lesson.user_id==current_user.id
        @product.destroy
        redirect_to lesson_path(@lesson.id)
      else
        render "show"
      end
  end

  private

   def product_params
     params.require(:product).permit(:title,:body,:url,:pdf).merge(lesson_id: params[:lesson_id])
   end
end
