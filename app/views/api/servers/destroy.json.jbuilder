json.server do
    json.partial! "api/servers/server", server: @server, active_channels: @active_channels
end

json.serverMember do
   json.partial! "api/server_users/serveruser", serveruser: @server_membership
end

