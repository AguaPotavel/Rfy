export interface userAction{
    type?: string,
    payload: JSON
}

const initial = {
    type: 'empty',
    token : '',
    userPlaylists: {} 
}

export default function (state = initial, action: userAction){
    switch (action.type){
        case 'USER_LOGIN':
            return {...state, ...action.payload, type:"logged"}

        case 'USER_LOGOUT':
            return action.payload

        case 'USER_SET_PLAYLISTS':
            return {...state, ...action.payload}

        default:
            return state
    }
}