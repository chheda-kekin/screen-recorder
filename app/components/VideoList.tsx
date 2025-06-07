import React from "react";

import VideoCard from "@/app/components/VideoCard";
import allVideos from '@/app/data/all_videos';


const VideoList: React.FC<any> = () => {

    return (
        <>
            <section className="video-grid">
                {allVideos.map(video => {

                    const createdOnDate = new Date(video.createdOn);
                    const createdOnDateStr = createdOnDate.toLocaleDateString("en-IN", {
                        timeZone: "Asia/Kolkata",
                        year: "numeric",
                        month: "short",
                        day: "numeric"
                    });
                    
                    return (
                        <VideoCard key={video.id} id={video.id} title={video.title}
                            creator={video.creator}
                            creatorImg={video.creatorImg}
                            duration={video.duration}
                            isPublic={video.isPublic}
                            views={video.views}
                            thumbnailSrc={video.thumbnailSrc}
                            createdOn={createdOnDateStr} />
                    );
                })}
            </section>
        </>
    );
}

export default VideoList;