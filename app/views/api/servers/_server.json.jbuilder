json.key_format! camelize: :lower

json.set! server.id do 
    json.id server.id
    json.name server.name
    json.ownerId server.owner_id
    json.invite server.invite
    json.activeChannel active_channels[server.id] || 0
    if server.profile_pic.attached?
      json.photoUrl url_for(server.profile_pic)
    end
end