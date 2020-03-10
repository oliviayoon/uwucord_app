json.entities do

    json.servers do
        @servers.each do |server|
            json.set! server.id do
                json.partial! "api/servers/server", server: server
            if server.profile_pic.attached?
                json.photoUrl url_for(server.profile_pic) 
            else
                json.photoUrl ""
            end
        end
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

end