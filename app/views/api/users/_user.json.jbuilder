json.key_format! camelize: :lower
json.extract! user, :id, :username, :user_number
json.imageUrl url_for(user.profile_pic)
