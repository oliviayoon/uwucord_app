json.server do 
    json.partial! "/api/servers/server", server: @server, active_channels: @active_channels
end
json.channels do
    @server.channels.each do |channel|
        json.set! channel.id do
            json.partial! "/api/channels/channel", channel: channel
        end
    end
end

json.serverMembers do
    if @server.memberships.exists?
        @server.memberships.each do |membership|
            json.set! membership.id do
                json.partial! "/api/server_users/serveruser", serveruser: membership
            end
        end
    end
end

json.users do
    @server.members.each do |member|
        json.set! member.id do
            json.partial! "/api/users/user", user: member
        end
    end
end

json.messages do
    if @server.channels.first.messages.exists?
        @messages.each do |message|
            json.set! message.id do 
                json.partial! "api/messages/message", message: message
            end
        end
    end
end