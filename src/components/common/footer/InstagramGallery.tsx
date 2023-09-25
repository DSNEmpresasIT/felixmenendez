import React, { useEffect, useState } from 'react'
import { getInstagramPhotos } from 'src/services/instagram-services';

export const InstagramGallery = ({ INSTAGRAM_TOKEN }: { INSTAGRAM_TOKEN: string }) => {
  const [instagramPhotos, setInstagramPhotos ] = useState<any>();
  useEffect(() => {
    getInstagramPhotos(INSTAGRAM_TOKEN)
      .then(res => setInstagramPhotos(res))
      .catch(err => console.log(err))
  }, [INSTAGRAM_TOKEN])

  return (
    <div className="col-xl-3 col-md-6 col-12">
    <div className="footer-item footer-gallery">
      <div className="footer-inner">
        <div className="footer-title">
          <h5>Ultimas publicaciones de Instagram</h5>
        </div>
        <div className="footer-body">
          <ul className="agri-ul">
            {
              instagramPhotos?.map((post: any, index: number) => {
                if (index > 8) return;
                return (
                  <li key={post.permalink}><a target='_blank' href={post.permalink}><img style={{minHeight: '100%'}} src={post.media_url} alt="footer-gallery" /></a></li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}
