class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            @demo_server = Server.find_by(name: "welcome dweebs !! uwu")
            ServerUser.create(server_id: @demo_server.id, user_id: @user.id)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.find_by(id: params[:id])
        render :show
    end

    private

    def user_params
        params.require(:user).permit(:username, :email, :password)
    end

end
