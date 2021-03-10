export function Login (token:string) {
    return {
        type: 'USER_LOGIN',
        payload: {token: token}
    }
}

export function setPlaylists (playlists:JSON) {
    return {
        type: 'USER_SET_PLAYLISTS',
        payload: {userPlaylists: playlists}
    }
}

export function setSelected (name: string) {
    return {
        type: 'USER_SET_SELECTION',
        payload: {selected: name}
    }
}

export function Logout () {
    return {
        type: 'USER_LOGOUT',
        payload: {token: ''}
    }
}