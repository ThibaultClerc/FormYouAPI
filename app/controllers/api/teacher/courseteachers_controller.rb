class Api::Teacher::CourseteachersController < ApplicationController
  before_action :set_courseteacher, only: [:show, :update, :destroy]
  # before_action :authenticate_user!, only: [:edit, :destroy, :create, :new]
  before_action :authenticate_teacher, only: [:show, :index, :edit, :destroy, :create, :new, :update]


  def authenticate_teacher
    if current_user.teacher? && current_user.is_validated == true
        puts 'yeah'
      else
        redirect_to root_path
    end
  end

  # GET /courseteachers
  def index
    @courseteachers = current_user.course_teachers

    render json: @courseteachers
  end

  # GET /courseteachers/1
  def show
    render json: @courseteacher
  end

  # POST /courseteachers
  def create
      @courseteacher = CourseTeacher.new(courseteacher_params)

        if @courseteacher.save 
          render json: @courseteacher, status: :created
        else
          render json: @courseteacher.errors, status: :unprocessable_entity
        end
  end

  # PATCH/PUT /courseteachers/1
  def update
    if @courseteacher.update(courseteacher_params)
      render json: @courseteacher
    else
      render json: @courseteacher.errors, status: :unprocessable_entity
    end
  end

  # DELETE /courseteachers/1
  def destroy
    @courseteacher.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_courseteacher
      @courseteacher = CourseTeacher.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def courseteacher_params
      params.require(:course_teacher).permit(:course_id).merge({teacher_id: current_user.id})    
    end
end
