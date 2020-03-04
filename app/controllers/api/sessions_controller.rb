class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_creds(params[:user][:email], params[:user][:password])
        
        if @user
            login(@user)
            render "api/users/show"
        else
            render json: ["Invalid email/password"], status: 400
        end
    end

    def destroy
        if current_user
            logout!
            render json: {}
        else
            render json: ["Invalid Session: No user to log out"], status: 404
        end
    end


end
