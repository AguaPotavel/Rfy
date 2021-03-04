export async function getDevices(token: string): Promise<any> {
    return fetch(`https://api.spotify.com/v1/me/player/devices`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        method: 'GET',
      }).then((d) => d.json());
}


export async function getCurrentUserTracking(token: string): Promise<any> {
  return fetch(`https://api.spotify.com/v1/me/player/currently-playing?market=PT`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      method: 'GET',
    }).then((d) => d);
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

// (async () => {
//   const rawResponse = await fetch('https://httpbin.org/post', {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({a: 1, b: 'Textual content'})
//   });
//   const content = await rawResponse.json();

//   console.log(content);
// })();