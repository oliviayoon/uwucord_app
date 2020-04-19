class MessageChannel < ApplicationCable::Channel
    def subscribed
      stream_from "room-#{params["server"]}:messages"
    end
  
    def unsubscribed; end
end
  