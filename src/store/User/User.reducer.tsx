export interface userAction{
    type?: string,
    payload: JSON
}

const initial = {
    type: 'empty',
    payload: {token : ''} 
}

export default function (state = initial, action: userAction){
    switch (action.type){
        case 'USER_LOGIN':
            return action.payload

        case 'USER_LOGOUT':
            return action.payload

        default:
            return state
    }
}