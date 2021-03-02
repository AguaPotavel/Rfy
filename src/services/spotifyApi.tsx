export async function getDevices(token: string): Promise<any> {
    return fetch(`https://api.spotify.com/v1/me/player/devices`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        method: 'GET',
      }).then((d) => d.json());
}