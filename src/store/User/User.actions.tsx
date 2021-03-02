export function Login (token:string) {
    return {
        type: 'USER_LOGIN',
        payload: {token: token}
    }
}

export function Logout () {
    return {
        type: 'USER_LOGOUT',
        payload: {token: ''}
    }
}