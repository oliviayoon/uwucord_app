export const createChannel = channel => (
    $.ajax({
        method: "POST",
        url: `api/servers/${channel.serverId}/channels`,
        data: {channel}
    })
)
export const updateChannel = channel => (
    $.ajax({
        method: "PATCH",
        url: `api/channels/${channel.id}/`,
        data: {channel}
    })
)
export const destroyChannel = channelId => {
     
    return(
    $.ajax({
        method: "DELETE",
        url: `api/channels/${channelId}`
    })
) }