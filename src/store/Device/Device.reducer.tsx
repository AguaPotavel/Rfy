export interface userAction{
    type?: string,
    payload: JSON
}

const initial = {
    type: 'empty',
    payload: {deviceId : ''} 
}

export default function (state = initial, action: userAction){
    switch (action.type){
        case 'DEVICE_SET':
            return action.payload

        case 'DEVICE_DROP':
            return action.payload

        default:
            return state
    }
}