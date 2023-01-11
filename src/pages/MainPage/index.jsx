import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useDispatch, useSelector } from 'react-redux'
import DetailCard from '../../components/DetailCard/DetailCard'
import Layout from '../../components/Layout'
import { getPhotos } from '../../redux/action/photos'
import { Bars } from 'react-loader-spinner'

import './style.scss'

const MainPage = () => {
  const photos = useSelector((state) => state.photos.photos)
  const loading = useSelector((state) => state.photos.isPhotosLoading)
  const total = useSelector((state) => state.photos.totalPhotos)

  const dispatch = useDispatch()

  const [page, setPage] = useState(1)

  const nextHandler = () => {
    setPage(page + 1)
  }

  useEffect(() => {
    dispatch(getPhotos(page))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  return (
    <Layout nickName="Sergey" avatarUrl="" id={1}>
      <div className="mainPage">
        {loading ? (
          <div className="mainPage__liader">
            <Bars color="green" height={80} width={80} />
          </div>
        ) : (
          <InfiniteScroll
            dataLength={photos.length}
            next={nextHandler}
            hasMore={photos.length < total}
            loader={
              <div className="mainPage__loader">
                <Bars color="green" height={15} width={15} />
              </div>
            }
            endMessage={<p className="mainPage__loader">That`s all</p>}>
            {photos.map(({ author, imgUrl, id, likes, comments, avatarUrl }) => (
              <DetailCard
                userName={author.nickname}
                userId={author.id}
                avatarUrl={author.avatarUrl}
                imgUrl={imgUrl}
                likes={likes.length}
                isLikeByYou={true}
                comments={comments}
                key={id}
                className="mainPage__card"
              />
            ))}
          </InfiniteScroll>
        )}
      </div>
    </Layout>
  )
}

export default MainPage
