class LessonsController < ApplicationController
  def index
    @users = User.all
  end
end
