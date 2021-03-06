export function setMusic (trackData:JSON) {
    return {
        type: 'MUSIC_SET',
        payload: trackData
    }
}

export function setVolume (volume:number) {
    return {
        type: 'VOLUME_SET',
        payload: volume
    }
}