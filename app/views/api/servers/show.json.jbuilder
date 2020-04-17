json.server do 
    json.partial! "/api/servers/server", server: @server, active_channels: @active_channels
end
json.channel do
    if @server.channels.exists?
    json.partial! "/api/channels/channel", channel: @server.channels.first
end
end
json.user do
    if @server.memberships.exists?
    json.partial! "/api/server_users/serveruser", serveruser: @server.memberships.first
    end
end