export interface trackAction{
    type?: string,
    payload: JSON
}

const initial = {
    type: 'empty',
    payload: {} 
}

export default function (state = initial, action: trackAction){
    switch (action.type){
        case 'MUSIC_SET':
            return action.payload

        default:
            return state
    }
}