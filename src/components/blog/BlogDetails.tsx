import React from "react";
import { useBlogContext } from "src/context/blog-context";
import { getFormatDate } from "src/util/getDateFormat";
import { CommentsSection } from "./blog-detail/CommentsSection";
import { BlogTypes } from "src/context/types/blog";

export const BlogDetails = () => {
  const { state, dispatch }: any = useBlogContext();
  return (
    <article className="animate__animated animate__fadeIn">
      <div style={{ height: '150px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item" aria-current="page"> <a href="/" style={{ color: 'inherit' }}>Home</a> </li>
            <li className="breadcrumb-item" aria-current="page"> <a type="button" style={{ color: 'inherit' }}>Noticias</a></li>
            <li className="breadcrumb-item" aria-current="page"> <a type="button" style={{ color: '#ffb11f' }}>Pubicación</a></li>
          </ol>
        </nav>
        <div>
          <button onClick={() => dispatch({ type: BlogTypes.SET_FACEBOOK_POST_DETAIL, payload: undefined })} className="lab-btn" style={{ color: '#f7f7f7', border: 'none' }}>Atras</button>
        </div>
      </div>
      <div className="post-item-2">
        <div className="post-inner">
          <div className="post-thumb">
            <img src={state.facebookPostDetail.image?.src} alt="blog" />
          </div>
          <div className="post-content">
            <h4>{getFormatDate(state.facebookPostDetail.created_time)}</h4>
            <div className="meta-post">
              <p>
                <span className="post-date">
                  A través de <a target="_blank" href={state.facebookPostDetail.url}>Facebook</a>
                </span>
                <span className="post-like">
                  <a type="button">
                    {state.facebookPostDetail.reactions?.length ?? "0"} Me
                    gusta
                  </a>
                </span>
                <span className="comment-name">
                  <a type="button">
                    {state.facebookPostDetail.comments?.length ?? "0"}{" "}
                    Comentarios
                  </a>
                </span>
              </p>
            </div>
            <p>{state.facebookPostDetail.description}</p>
          </div>
        </div>
      </div>
      <div className="tags-social">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="scocial">
              <span>Síguenos:</span>
              <div className="scocial-media">
                <a target="_blank" href="https://www.facebook.com/solucionesagropecuariasintegrales" className="facebook">
                  <i className="icofont-facebook"></i>
                </a>
                <a target="_blank" href="https://www.instagram.com/felixmenendezsrl/" style={{ color: 'pink' }}>
                  <i className="icofont-instagram"></i>
                </a>
                <a href="https://www.youtube.com/@lafarmaciadelcampo" target="_blank" style={{ color: 'red' }}>
                  <i className="icofont-youtube"></i>
                </a>
                <a href="https://linktr.ee/felixmemendezsrl" target="_blank" className="vimeo">
                  <i className="icofont-link"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
     <CommentsSection comments={state.facebookPostDetail.comments} />
    </article>
  );
};
