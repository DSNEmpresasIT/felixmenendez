const BASE_URL='https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,permalink&access_token='

export async function getInstagramPhotos(token: string) {
  try {
    const dataFetch = await fetch(BASE_URL+token);
    const { data } = (await dataFetch.json());

    return data.filter((post: any) => post.media_type === 'IMAGE')
  } catch (error) {
    console.log(error);
  }
}

export async function getLastInstagramReel(token: string) {
  try {
    const dataFetch = await fetch(BASE_URL+token);
    const data = (await dataFetch.json()).data;

    return data.filter((post: any) => post.media_type === 'VIDEO')[0];
  } catch (error) {
    console.log(error);
  }
}

export async function getInstagramVideos(token: string) {
  try {
    const dataFetch = await fetch(BASE_URL+token);
    const data = (await dataFetch.json()).data;

    return data.filter((post: any) => post.media_type === 'VIDEO')
  } catch (error) {
    console.log(error);
    return []
  }
}
