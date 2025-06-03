import React from "react";

import VideoCard from "@/app/components/VideoCard";
import allVideos from '@/app/data/all_videos';


const VideoList: React.FC<any> = () => {

    return (
        <>
            <section className="video-grid">
                {allVideos.map(video => (
                    <VideoCard key={video.id} id={video.id} title={video.title}
                        creator={video.creator}
                        creatorImg={video.creatorImg}
                        duration={video.duration}
                        isPublic={video.isPublic}
                        views={video.views}
                        thumbnailSrc={video.thumbnailSrc}
                        createdOn={video.createdOn} />
                ))}
            </section>
        </>
    );
}

export default VideoList;