export const fetchAllServers = () => (
    $.ajax({
        method: "GET",
        url: "api/servers"
    })
)

export const createServer = server => (
    $.ajax({
        method: "POST",
        url: "api/servers",
        data: server,
        contentType: false,
        processData: false
    })
)

export const deleteServer = serverId => (
    $.ajax({
        method: "DELETE",
        url: `api/servers/${serverId}`
    })
)

export const updateServer = server => (
    $.ajax({
        method: "PATCH",
        url: `api/servers/${server.id}`,
        data: server,
        processData: false,
        contentType: false
    })
)

export const joinServer = (serverInvite) => {
    if (serverInvite === "") serverInvite = "blank";
    return(
    $.ajax({
        method: "POST",
        url: `api/servers/join/${serverInvite}`
    })
)}

export const leaveServer = (serverId) => (
    $.ajax({
        method: "DELETE",
        url: `api/servers/leave/${serverId}`
    })
)