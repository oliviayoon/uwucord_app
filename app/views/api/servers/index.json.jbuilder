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