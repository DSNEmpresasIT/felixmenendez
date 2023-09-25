import React, { FC } from 'react'
import { getFormatDate } from 'src/util/getDateFormat'
import type { FacebookPostComments } from 'src/util/types'

interface CommentsSectionProps {
  comments: FacebookPostComments[]
}

export const CommentsSection:FC<CommentsSectionProps> = ({ comments }) => {
  return (
    <div id="comments" className="comments">
      <h4 className="title-border">{comments?.length ?? '0'} Comentarios</h4>
      <ul className="agri-ul comment-list">
        { comments?.map((comment: FacebookPostComments) => {
            return (
            <li className="comment" id="li-comment-3" key={comment.from.id}>
              <div className="com-thumb">
                <img
                  alt="facebook-comment"
                  src={comment.from.picture.data.url}
                  className="avatar avatar-90 photo"
                  height="50"
                  width="50"
                />
              </div>
              <div className="com-content">
                <div className="com-title">
                  <div className="com-title-meta">
                    <h6>
                      <a type='button' rel="external nofollow" className="url">
                        {comment.from.name}
                      </a>
                    </h6>
                    <span>{getFormatDate(comment.created_time)}</span>
                  </div>
                </div>
                <p>
                 {comment.message}
                </p>
              </div>
            </li>
            )
          }) 
        }
      </ul>
    </div>
  )
}
