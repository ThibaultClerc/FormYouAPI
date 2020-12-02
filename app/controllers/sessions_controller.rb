class SessionsController < Devise::SessionsController

  private

  def respond_with(resource, _opts = {})
    puts current_user.user_category
    render  jsonapi: resource,
            fields: { users: [:first_name, :last_name, :email] }

    
  end

  def respond_to_on_destroy
    head :no_content
  end

end