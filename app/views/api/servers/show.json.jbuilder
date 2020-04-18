json.server do 
    json.partial! "/api/servers/server", server: @server, active_channels: @active_channels
end
json.channel do
    if @server.channels.exists?
    json.partial! "/api/channels/channel", channel: @server.channels.first
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