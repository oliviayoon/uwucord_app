class Api::ServersController < ApplicationController

    def create
        @server = Server.new(server_params)
        if @server.save
            render :show
        else
            render json: @server.errors.full_messages, status: 422
        end
    end

    def index
        @servers = Server.all
        render :index
    end

    def server_params
        params.require(:server).permit(:name)
    end
end
