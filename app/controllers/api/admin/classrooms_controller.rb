class Api::Admin::ClassroomsController < ApplicationController
  before_action :set_classroom, only: [:show, :update, :destroy]
  # before_action :authenticate_user!, only: [:edit, :destroy, :create, :new]
  before_action :authenticate_admin, only: [:show, :index, :edit, :destroy, :create, :new, :update]

  def authenticate_admin
    if current_user.admin? && current_user.is_validated == true
        puts 'yeah'
      else
        redirect_to root_path
    end
  end

  # GET /classrooms
  def index
    @classrooms = Classroom.all

    render json: @classrooms
  end

  # GET /classrooms/1
  def show
    render json: @classroom
  end

  # POST /classrooms
  def create
    @classroom = Classroom.new(classroom_params)

    if @classroom.save
      render json: @classroom, status: :created
    else
      render json: @classroom.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /classrooms/1
  def update
    if @classroom.update(classroom_params)
      render json: @classroom
    else
      render json: @classroom.errors, status: :unprocessable_entity
    end
  end

  # DELETE /classrooms/1
  def destroy
    @classroom.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_classroom
      @classroom = Classroom.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def classroom_params
      params.require(:classroom).permit(:title)
    end
end
