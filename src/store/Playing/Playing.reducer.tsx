export interface trackAction{
    type?: string,
    payload: JSON
}

const initial = {
    type: 'empty',
    trackData: {},
    volume: 0
}

export default function (state = initial, action: trackAction){
    switch (action.type){
        case 'MUSIC_SET':
            return {...state, ...action.payload}

        case 'VOLUME_SET':
            return {...state, ...action.payload}

        default:
            return state
    }
}