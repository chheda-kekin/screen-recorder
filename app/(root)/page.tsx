import React from 'react'

import Header from '@/app/components/Header';
import VideoCard from '@/app/components/VideoCard';



const Page = () => {
  return (
    <main className='wrapper page'>
      <Header title='All Videos' subTitle='Public Library' />
      <VideoCard id="1" title="SnapChat Message - 30 June 2025" 
          creator="John Smith"
          creatorImg='/assets/images/jason.png'
          duration={14400} 
          isPublic={true} 
          views={2} 
          thumbnailSrc='/assets/samples/thumbnail(1).png'
          createdOn={1748794247632} 
          url="http://www.google.com" />
    </main>
  )
}

/**
 * title
 * creator
 * duration
 * isPublic
 * views
 * thumbnailSrc
 * createdOn
 * url
 */

export default Page