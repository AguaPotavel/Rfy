export interface userAction{
    type?: string,
    payload?: JSON
}

export default function (state = 0, action: userAction){
    switch (action.type){
        case 'USER_LOGIN':
            return action.payload

        case 'USER_LOGOUT':
            return action.payload

        default:
            return state
    }
}