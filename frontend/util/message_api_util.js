export const createMessage = message => {
    debugger
    return(
    $.ajax({
        method: "POST",
        url: `api/channels/${message.channelId}/messages`,
        data: {message}
    })
)}
export const updateMessage = message => (
    $.ajax({
        method: "PATCH",
        url: `api/messages/${message.id}/`,
        data: {message}
    })
)
export const destroyMessage = messageId => {
    // debugger
    return(
    $.ajax({
        method: "DELETE",
        url: `api/messages/${messageId}`
    })
) }