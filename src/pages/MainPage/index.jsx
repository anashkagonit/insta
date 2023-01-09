import React, { useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useDispatch, useSelector } from 'react-redux'
import DetailCard from '../../components/DetailCard/DetailCard'
import Layout from '../../components/Layout'
import { getPhotos } from '../../redux/action/photos'

import './style.scss'

const MainPage = () => {
  const photos = useSelector((state) => state.photos.photos)
  const loading = useSelector((state) => state.photos.isPhotosLoading)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPhotos())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Layout nickName="Sergey" avatarUrl="" id={1}>
      <div className="mainPage">
        <InfiniteScroll
          dataLength={photos.length}
          next={() => console.log('next')}
          hasMore={true}
          loader={'loading'}
          endMessage={<p>That`s all</p>}>
          {loading
            ? 'loading'
            : photos.map(({ author, imgUrl, id, likes, comments }) => (
                <DetailCard
                  userName={author.userName}
                  userId={author.id}
                  imgUrl={imgUrl}
                  likes={likes.length}
                  isLikeByYou={true}
                  comments={comments}
                  key={id}
                  className="mainPage__card"
                />
              ))}
        </InfiniteScroll>
      </div>
    </Layout>
  )
}

export default MainPage
