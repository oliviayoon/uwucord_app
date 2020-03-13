class Api::MessagesController < ApplicationController

    def create
        debugger
        @message = Message.new(body: params[:message][:body], channel_id: params[:message][:channel_id], author_id: current_user.id)
        if @message.save
            render :create
        else
            render json: @messages.errors.full_messages, status: 422
        end
    end
    
    def update
        @message = Message.find_by(id: params[:message][:id])
        if @message
            @message.update(body: params[:message][:body])
            render :create
        else
            render json: ["Could not update message"], status: 422
        end
    end

    def destroy
        @message = Message.find_by(id: params[:message][:id])
        if @message
            @message.destroy
            render :create
        else
            render json: ["Could not update message"], status: 422
        end

    end


    def messages_params
        params.require(:message).permit(:author_id, :channel_id, :body)
    end 

end
