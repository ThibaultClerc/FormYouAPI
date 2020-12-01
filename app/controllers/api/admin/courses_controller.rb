class Api::Admin::CoursesController < ApplicationController
  before_action :set_course, only: [:show, :update, :destroy]
  # before_action :authenticate_user!, only: [:edit, :destroy, :create, :new]
  before_action :authenticate_admin, only: [:show, :index, :edit, :destroy, :create, :new, :update]

    def authenticate_admin
      if current_user.user_category == "admin"
          puts 'yeah'
        else
          redirect_to root_path
      end
    end

  # GET /courses
  def index
    @courses = Course.all

    render json: @courses
  end

  # GET /courses/1
  def show
    render json: @course
  end

  # POST /courses
  def create
    @course = Course.new(course_params)

    if @course.save
      render json: @course, status: :created
    else
      render json: @course.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /courses/1
  def update
    if @course.update(course_params)
      render json: @course
    else
      render json: @course.errors, status: :unprocessable_entity
    end
  end

  # DELETE /courses/1
  def destroy
    @course.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_course
      @course = Course.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def course_params
      params.require(:course).permit(:title)
    end
end
