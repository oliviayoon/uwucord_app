// export const fetchServerUsers = () => (
//     $.ajax({
//         url: '/api/servers'
//     })
// )

export const updateUser = (user) => (
    $.ajax({
        method: "PATCH",
        url: `api/users/${user.id}`,
        data: user,
        processData: false,
        contentType: false
    })
)