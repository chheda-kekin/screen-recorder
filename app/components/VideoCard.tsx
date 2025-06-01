import React from "react";

type VideoDetails = {
    id: string
    title: string;
    creator: string;
    creatorImg: string;
    duration: number;
    isPublic: boolean;
    views: number;
    thumbnailSrc: string;
    createdOn: number;
    url: string;
}

const VideoCard: React.FC<VideoDetails> = (props) => {
    return (
        <>
            <div>UI for video card!!</div>
        </>
    )
}

export default VideoCard;