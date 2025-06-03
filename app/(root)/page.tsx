import React from 'react'

import Header from '@/app/components/Header';
import VideoList from '@/app/components/VideoList';

const Page = () => {
  return (
    <main className='wrapper page'>
      <Header title='All Videos' subTitle='Public Library' />
        <VideoList />
    </main>
  )
}

export default Page;