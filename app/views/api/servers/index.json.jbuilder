json.entities do
    json.servers do
        @servers.each do |server|
                json.partial! "api/servers/server", server: server, active_channels: @active_channels
        end
    end

    json.users do
        @members.each do |member|
            json.set! member.id do
                json.partial! "api/users/user", user: member
            end
        end
    end

    json.serverUsers do
        @serverusers.each do |serveruser|
            json.set! serveruser.id do
                json.partial! "api/server_users/serveruser", serveruser: serveruser
            end
        end
    end

    json.channels do
        @channels.each do |channel|
            json.set! channel.id do
                json.partial! "api/channels/channel", channel: channel
            end
        end
    end

    json.messages do
        @messages.each do |message|
            json.set! message.id do 
                json.partial! "api/messages/message", message: message
            end
        end 
    end

end