import React, { useState } from 'react'
import UserBadge from '../UserBadge/UserBadge'
import Comment from '../Comment/Comment'

import './style.scss'

const DetailCard = ({ userName, avatarUrl, userId, imgUrl, likes, isLikeByYou, comments }) => {
  const [isCommentsShow, setIsCommentsShow] = useState(false)

  const renderComments = () => {
    if (comments.length > 2 && !isCommentsShow) {
      const commentsForRender = [...comments]
      commentsForRender.splice(comments.length - 2, 2)

      return (
        <>
          <span
            className="datailCard__showMore"
            onClick={() => setIsCommentsShow(true)}>{`Показать еще ${
            comments.length - commentsForRender.length
          } комментариев`}</span>
          {commentsForRender.map((comment, id) => (
            <Comment {...comment} key={id} />
          ))}
        </>
      )
    }
    return comments.map((comment, id) => <Comment {...comment} key={id} />)
  }

  return (
    <div className="datailCard">
      <div className="datailCard__header">
        <UserBadge nickName={userName} avatarUrl={avatarUrl} id={userId} />
      </div>
      <div>
        <img src={imgUrl} alt="" className="datailCard__img" />
      </div>
      <div className="datailCard__buttons">
        <i className={`${isLikeByYou ? 'fas' : 'far'} fa-heart datailCard__icon_like`} />
        <i className="fas fa-comment datailCard__icon_comment" />
      </div>
      <div className="datailCard__likes">{`Оценили ${likes} человек`}</div>
      <div className="datailCard__comments">{renderComments()}</div>
      <textarea className="datailCard__textarea" />
    </div>
  )
}

export default DetailCard
