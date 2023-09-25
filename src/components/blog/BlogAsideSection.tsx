import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useBlogContext } from "src/context/blog-context";
import { BlogTypes } from "src/context/types/blog";
import { getInstagramVideos } from "src/services/instagram-services";
import { getFormatDate } from "src/util/getDateFormat";
import type { FacebookPost, Keys } from "src/util/types";

export const BlogAsideSection = ({ keys }: { keys: Keys }) => {
  const { state, dispatch }: any = useBlogContext();
  const [ recentsPost, setRecentsPosts ] = useState<FacebookPost[]>();
  const [ instagramVideos, setInstagramVideos ] = useState<any[]>();

  function handleRecentPosts() {
    let index = 0; 
    let newRecentsPosts: FacebookPost[]= [];
    if (state.facebookPostData) {
      state.facebookPostData.forEach(( post: FacebookPost, i:number) => {
        if (post === state.facebookPostDetail) return;
        if (index === 4) return;

        index = index + 1;
        newRecentsPosts = newRecentsPosts[0] ? [...newRecentsPosts, post] : [post];
      }) 
      setRecentsPosts(newRecentsPosts)
    }
  }

  useEffect(() => {
    handleRecentPosts();
  }, [state.facebookPostData, state.facebookPostDetail]);

  useEffect(() => {
    if (keys.INSTAGRAM_TOKEN) {
      getInstagramVideos(keys.INSTAGRAM_TOKEN)
      .then(res => setInstagramVideos(res))
      .catch(err => (console.log(err), setInstagramVideos([])))
    }
  }, []);
  return (
    <div className="col-lg-3 col-md-7 col-12">
      <aside>
        <div className="widget widget-author">
          <div className="widget-wrapper">
            <div className="admin-thumb">
              <img src="/assets/images/logo/circular-logo.png" alt="author" />
            </div>
            <div className="admin-content">
              <div className="scocial-media">
                <a href="https://www.facebook.com/solucionesagropecuariasintegrales" className="facebook">
                  <i className="icofont-facebook"></i>
                </a>
                <a href="https://www.instagram.com/felixmenendezsrl/" style={{ color: 'pink' }}>
                  <i className="icofont-instagram"></i>
                </a>
                <a href="https://www.youtube.com/@lafarmaciadelcampo" style={{ color: 'red' }}>
                  <i className="icofont-youtube"></i>
                </a>
                <a href="https://linktr.ee/felixmemendezsrl" className="vimeo">
                  <i className="icofont-link"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="widget widget-post">
          <div className="widget-header">
            <h5>Recent Post</h5>
          </div>
          <ul className="agri-ul widget-wrapper">
            {
              recentsPost?.map((post: FacebookPost) => {
                return (
                  <li 
                    key={`${post.url}-recent-posts`} 
                    onClick={() => dispatch({ type: BlogTypes.SET_FACEBOOK_POST_DETAIL, payload: post })} 
                    className="d-flex flex-wrap justify-content-between animate__animated animate__fadeIn"
                  >
                    <div className="post-thumb">
                      <a type="button">
                        <img src={post.image.src} alt="product" />
                      </a>
                    </div>
                    <div className="post-content">
                      <a type="button">
                        <h6>{getFormatDate(post.created_time)}</h6>
                      </a>
                      <p>By Facebook F.M.</p>
                    </div>
                  </li>
                )
              })
            }
            {
              !recentsPost &&  (
                <>
                  <li style={{ display: 'flex', gap: '5px' }}>
                    <Skeleton height={70} width={70} />
                    <Skeleton height={15} count={3} width={150} />
                  </li>
                  <li style={{ display: 'flex', gap: '5px' }}>
                    <Skeleton height={70} width={70} />
                    <Skeleton height={15} count={3} width={150} />
                  </li>
                  <li style={{ display: 'flex', gap: '5px' }}>
                    <Skeleton height={70} width={70} />
                    <Skeleton height={15} count={3} width={150} />
                  </li>
                  <li style={{ display: 'flex', gap: '5px' }}>
                    <Skeleton height={70} width={70} />
                    <Skeleton height={15} count={3} width={150} />
                  </li>
                </>
              ) 
            }
          </ul>
        </div>
        <div className="widget widget-instagram">
          <div className="widget-header">
            { instagramVideos?.length && <h5>Instagram</h5> }
          </div>
          <ul className="agri-ul widget-wrapper d-flex flex-wrap justify-content-center">
            {
              instagramVideos?.map((photos: any, i: number) => {
                if (i > 3) return;
                return (
                  <li className="animate__animated animate__fadeIn" key={`${photos.permalink}-aside-detail`}>
                    <a href={photos.permalink}>
                      <video src={photos.media_url} loop muted autoPlay width='100%' />
                    </a>
                  </li>
                )
              })
            }
            {
              !instagramVideos && (
                <>
                  <li className="animate__animated animate__fadeIn" >
                    <Skeleton width={120} height={200}  />
                  </li>
                  <li className="animate__animated animate__fadeIn" >
                    <Skeleton width={120} height={200}  />
                  </li>
                  <li className="animate__animated animate__fadeIn" >
                    <Skeleton width={120} height={200}  />
                  </li>
                  <li className="animate__animated animate__fadeIn" >
                    <Skeleton width={120} height={200}  />
                  </li>
                </>
              )
            }
          </ul>
        </div>
      </aside>
    </div>
  );
};
