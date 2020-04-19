json.key_format! camelize: :lower
json.extract! user, :id, :username, :user_number
if user.profile_pic.attached?
    json.imageUrl url_for(user.profile_pic)
end
