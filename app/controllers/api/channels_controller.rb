class Api::ChannelsController < ApplicationController

    def create
        # debugger
        @channel = Channel.new(name: params[:channel][:name], server_id: params[:channel][:serverId])
        if @channel.save
            render :create
        else
            render json: @channel.errors.full_messages, status: 422
        end
    end

    def destroy
        @channel = Channel.find_by(id: params[:id])
        if @channel.destroy
            render :create
        else
            render json: ["Unable to destroy channel"], status: 422
        end
    end

    def update
        debugger
        @channel = Channel.find_by(id: params[:channel][:id])
        if @channel.update(name: params[:channel][:name])
            render :create
        else
            render json: ["Could not update channel details"], status: 422
        end

    end

    def channel_params
        params.require(:channel).permit(:name, :server_id, :is_dm?)
    end

end
