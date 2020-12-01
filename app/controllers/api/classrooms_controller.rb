class Api::ClassroomsController < ApplicationController
  before_action :set_classroom, only: [:show, :update, :destroy]
  before_action :authenticate_user!, only: [:index, :show]

  # GET /classrooms
  def index
    @classrooms = Classroom.all

    render json: @classrooms
  end

  # GET /classrooms/1
  def show
    render json: @classroom
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_classroom
      @classroom = Classroom.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def classroom_params
      params.require(:course).permit(:title)
    end
end
