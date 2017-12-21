class ProductsController < ApplicationController
  before_action :authenticate_user!
  def new
    @product = Product.new
    @lesson = Lesson.find(params[:lesson_id])
  end

  def show
    @product = Product.find(params[:id])
    @lesson = Lesson.find(params[:lesson_id])
    if @product.lesson.user_id==current_user.id || @product.free != 'limited'
    elsif current_user.subscription_id.present?
      begin
      Payjp.api_key = Rails.application.secrets.payjp_secret_key
      subscription = Payjp::Subscription.retrieve(current_user.subscription_id)
      if subscription.status == 'active'
      else
        subscription.delete
        @user = User.find(current_user)
        @user.update(subscription_id: nil)
        redirect_to purchase_view_lessons_path, alert: "カード情報の更新が正常に行われていません"
      end
      end
    else
      redirect_to purchase_view_lessons_path, alert: "有料会員登録を行ってください"
    end
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
     params.require(:product).permit(:title,:body,:url,:pdf,:free).merge(lesson_id: params[:lesson_id])
   end
end
