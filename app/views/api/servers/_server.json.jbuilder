json.key_format! camelize: :lower
json.extract! server, :id, :name, :owner_id, :invite
if server.profile_pic.attached?
    json.photoUrl url_for(server.profile_pic)
end