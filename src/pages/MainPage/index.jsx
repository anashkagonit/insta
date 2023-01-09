import React from 'react'
import DetailCard from '../../components/DetailCard/DetailCard'
import Layout from '../../components/Layout'

const MainPage = () => {
  return (
    <Layout nickName="Sergey" avatarUrl="" id={1}>
      <div>MainPage</div>
      <DetailCard
        userName="Sergey"
        userId={1}
        imgUrl="https://avatars.mds.yandex.net/i?id=3828e9df5b6cd2bbc95a9c816e0d2f4143ad24e0-8497208-images-thumbs&n=13&exp=1"
        likes={10}
        isLikeByYou={true}
        comments={[
          { text: 'asd', nickName: 'sergey' },
          { text: 'asd', nickName: 'sergey' },
          { text: 'asd', nickName: 'sergey' },
        ]}
      />
    </Layout>
  )
}

export default MainPage
