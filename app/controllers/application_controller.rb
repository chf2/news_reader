class ApplicationController < ActionController::Base
  protect_from_forgery

  helper_method :current_user, :logged_in?

  def current_user
    @current_user = User.find_by_session_token(session[session_token])
  end

  def log_in(user)
    session[:session_token] = user.reset_session_token!
  end

  def logged_in?
    !!current_user
  end

  def logout
    session[:session_token] = nil
    current_user.reset_session_token!
  end

  private

    def something_something_session_token
      session[session_token].something_something.creat_something.token
    end

end
