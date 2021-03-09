export async function getDevices(token: string): Promise<any> {
    return fetch(`https://api.spotify.com/v1/me/player/devices`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        method: 'GET',
      }).then((d) => d.json());
}

export async function getPlaybackData(token: string): Promise<any>{
  return fetch(`https://api.spotify.com/v1/me/player`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    method: 'GET',
  }).then((d) => d.json());
}

export async function getCurrentUserTracking(token: string): Promise<any> {
  return fetch(`https://api.spotify.com/v1/me/player/currently-playing?market=US`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      method: 'GET',
    }).then((d) => d.json());
}

export async function pausePlayer(token: string, device:string): Promise<any> {
  return fetch(`https://api.spotify.com/v1/me/player/pause?${device}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      method: 'PUT',
    }).then((d) => d);
}

export async function playPlayer(token: string): Promise<any> {
  return fetch(`https://api.spotify.com/v1/me/player/play`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      method: 'PUT',
    }).then((d) => d);
}

export async function playSeek(token: string, position:number): Promise<any> {
  return fetch(`https://api.spotify.com/v1/me/player/seek?position_ms=${position}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      method: 'PUT',
    }).then((d) => d);
}


export async function setVolume(token: string, volume:number): Promise<any> {
  return fetch(`https://api.spotify.com/v1/me/player/volume?volume_percent=${volume}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      method: 'PUT',
    }).then((d) => d);
}


export async function setDeviceActive(token: string, device: string): Promise<any>{
  return fetch(`https://api.spotify.com/v1/me/player`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    method: 'PUT',
    body: JSON.stringify({device_ids: [device]})
  }).then((d) => d);
}


export async function nextMusic(token: string): Promise<any>{
  return fetch(`https://api.spotify.com/v1/me/player/next`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then((d) => d);
}

export async function previousMusic(token: string): Promise<any>{
  return fetch(`https://api.spotify.com/v1/me/player/previous`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then((d) => d);
}

export async function Playlists(token: string, offset:number): Promise<any>{
  return fetch(`https://api.spotify.com/v1/me/playlists?offset=${offset}&limit=20`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    method: 'GET',
  }).then((d) => d.json());
}
