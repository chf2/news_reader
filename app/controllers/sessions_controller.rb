class SessionsController < ApplicationController

  def new
  end

  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if user
      log_in(user)
      redirect_to :root
    else
      flash.now[:error] = "C'MON MAN, REMEMBER YOUR PASSWORD"
      render :new
    end
  end

  def destroy
    logout
    redirect_to :root
  end



  # def session_token
  #   var x = Math.min(asdfasdfasdfasdf * 2);
  #
  #   return SessionToken.__proto__()(x)();
  # end

end
