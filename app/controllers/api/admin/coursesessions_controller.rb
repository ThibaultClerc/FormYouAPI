class Api::Admin::CoursesessionsController < ApplicationController
  before_action :set_coursesession, only: [:show, :update, :destroy]
  # before_action :authenticate_user!, only: [:edit, :destroy, :create, :new]
  before_action :authenticate_admin, only: [:show, :index, :edit, :destroy, :create, :new, :update]


  def authenticate_admin
    if current_user.user_category == "admin"
        puts 'yeah'
      else
        redirect_to root_path
    end
  end

  # GET /sessions
  def index
    @sessions = Session.all

    render json: @sessions
  end

  # GET /sessions/1
  def show
    render json: @session
  end

  # POST /sessions
  def create
    @session = Session.new(session_params)

    if @session.save
      render json: @session, status: :created
    else
      render json: @session.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /sessions/1
  def update
    if @session.update(session_params)
      render json: @session
    else
      render json: @session.errors, status: :unprocessable_entity
    end
  end

  # DELETE /sessions/1
  def destroy
    @session.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_coursesession
      @session = Session.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def session_params
      params.require(:session).permit(:classroom_id, :date, :teacher_id)
    end
end
