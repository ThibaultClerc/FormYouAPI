class SessionsController < Devise::SessionsController

  private

  def respond_with(resource, _opts = {})
    puts current_user.user_category
    render  jsonapi: resource,
            fields: { users: [:id, :is_validated, :email, :user_category] }

    
  end

  def respond_to_on_destroy
    head :no_content
  end

end