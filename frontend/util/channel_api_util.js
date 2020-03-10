export const createChannel = channel => (
    $.ajax({
        method: "POST",
        url: "api/channels"
    })
)
export const updateChannel = channel => (
    $.ajax({
        method: "PATCH",
        url: `api/servers/${channel.serverId}/channels`,
        data: channel
    })
)
export const destroyChannel = channelId => (
    $.ajax({
        method: "DELETE",
        url: `api/servers/${channelId}`
    })
) 