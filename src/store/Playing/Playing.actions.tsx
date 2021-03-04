export function setMusic (trackData:JSON) {
    return {
        type: 'MUSIC_SET',
        payload: trackData
    }
}