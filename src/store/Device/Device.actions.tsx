export function Login (device_id:string) {
    return {
        type: 'DEVICE_SET',
        payload: {deviceId: device_id}
    }
}

export function Logout () {
    return {
        type: 'DEVICE_DROP',
        payload: {deviceId: ''}
    }
}