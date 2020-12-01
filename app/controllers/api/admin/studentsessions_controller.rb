class Api::Admin::StudentsessionsController < ApplicationController
  before_action :set_studentsession, only: [:show, :update, :destroy]
    # before_action :authenticate_user!, only: [:edit, :destroy, :create, :new]
    before_action :authenticate_admin, only: [:show, :index, :edit, :destroy, :create, :new, :update]


    def authenticate_admin
      if current_user.admin?
          puts 'yeah'
        else
          redirect_to root_path
      end
    end

  # GET /studentsessions
  def index
    @studentsessions = Studentsession.all

    render json: @studentsessions
  end

  # GET /studentsessions/1
  def show
    render json: @studentsession
  end

  # POST /studentsessions
  def create
    @studentsession = Studentsession.new(studentsession_params)

    if @studentsession.save
      render json: @studentsession, status: :created, location: @studentsession
    else
      render json: @studentsession.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /studentsessions/1
  def update
    if @studentsession.update(studentsession_params)
      render json: @studentsession
    else
      render json: @studentsession.errors, status: :unprocessable_entity
    end
  end

  # DELETE /studentsessions/1
  def destroy
    @studentsession.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_studentsession
      @studentsession = Studentsession.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def studentsession_params
      params.require(:student_session).permit(:student_id, :session_id)
    end
end
