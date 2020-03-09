@serverusers.each do |serveruser|
        json.partial! 'api/server_users/serveruser', serveruser: serveruser
end