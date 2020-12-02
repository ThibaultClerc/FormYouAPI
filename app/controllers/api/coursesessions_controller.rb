class Api::CoursesessionsController < ApplicationController
  before_action :set_coursesession, only: [:show, :update, :destroy]
  before_action :authenticate_user!, only: [:index, :show]

  # GET /sessions
  def index
    @sessions = Session.all

    render jsonapi: @sessions
  end

  # GET /sessions/1
  def show
    render jsonapi: @session
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_coursesession
      @session = Session.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def session_params
      params.require(:session).permit(:classroom_id, :date, :course_teacher_id)
    end
end
