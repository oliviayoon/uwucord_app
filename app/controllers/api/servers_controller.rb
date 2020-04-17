class Api::ServersController < ApplicationController

    def create
        @server = Server.new(server_params)
        if @server.save
            ServerUser.create!(user_id: current_user.id, server_id: @server.id)
            @active_channels = {}
            @active_channels[@server.id] = @server.channels.first.id
            render :show
        else
            render json: @server.errors.full_messages, status: 422
        end
    end

    def show
        @server = Server.find_by(id: params[:id])
        if @server
            render :show
        else
            render json: ["Cannot find server"], status: 404
        end
    end

    def update 
        @server = Server.find_by(id: params[:server][:id])
        
        if @server.update(name: params[:server][:name])
            @server.profile_pic.purge
            @server.profile_pic.attach(params[:server][:profile_pic])
            render :show
        else
            render json: ["Could not update server details"], status: 422
        end
    end

    def index

        @servers = current_user.servers
        @members = []
        @serverusers = []
        @channels = []
        @messages = []
        @active_channels = {}
        @servers.each do |server|
            @active_channels[server.id] = server.channels.first.id if !server.channels.empty?
            @members += server.members
            @serverusers += server.memberships
            @channels += server.channels
        end

        @channels.each do |channel|
            if channel.messages.exists?
                @messages += channel.messages
            end
        end

        render :index
    end

    def destroy
        @server = current_user.owned_servers.find_by(id: params[:id])
         
        if @server.destroy
            render :destroy
        else
            render json: ["Cannot destroy server"], status: 422
        end
    end

    def join
        @server = Server.find_by(invite: params[:invite])
         
        if @server
            ServerUser.create!(user_id: current_user.id, server_id: @server.id)
            render :show
        else
            
            render json: ["Cannot find server"], status: 404
        end

    end

    def leave 
        @server = current_user.servers.find_by(id: params[:serverId])
        if @server && @server.owner_id != current_user.id
            @server.members.delete(current_user)
            render :show
        else
            render json: ['Unable to leave server, please remove server instead!'], status: 400
        end
    end

    def server_params
        params.require(:server).permit(:name, :owner_id, :private, :profile_pic)
    end
end
