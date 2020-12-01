class ApplicationController < ActionController::API
  respond_to :json

  def render_jsonapi_response(resource)
    if resource.errors.empty?
      render jsonapi: resource
    else
      render jsonapi_errors: resource.errors, status: 400
    end
  end

  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :last_name, :user_category])

    if current_user.present? && current_user.admin?
      devise_parameter_sanitizer.permit(:account_update, keys: [:first_name, :last_name, :user_category, :is_validated])
    else
      devise_parameter_sanitizer.permit(:account_update, keys: [:first_name, :last_name, :user_category])
    end
  end

end
