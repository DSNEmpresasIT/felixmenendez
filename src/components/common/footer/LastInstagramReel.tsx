import React, { useEffect, useState } from 'react'
import { getLastInstagramReel } from 'src/services/instagram-services'

export const LastInstagramReel = ({ INSTAGRAM_TOKEN }: { INSTAGRAM_TOKEN: string }) => {
  const [ lastReel, setLastReel ] = useState<any>();

  useEffect(() => {
    getLastInstagramReel(INSTAGRAM_TOKEN)
      .then(res => setLastReel(res))
      .catch(err => console.log(err))
  }, [INSTAGRAM_TOKEN])
  return (
    <div style={{ width: '100%' }}>
      {
        lastReel 
        ? (
          <a style={{ width: '90%' }} href={lastReel.permalink} target='_blank'>
            <video width='100%' src={lastReel.media_url} loop muted autoPlay />
          </a>
        )
        : (
          <span>Loading</span> // TODO Spinner
        )
      }
    </div>
  )
}
