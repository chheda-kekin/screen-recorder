"use client"

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
}

const VideoCard: React.FC<VideoDetails> = (props) => {

    const router = useRouter();

    const createdOnDate = new Date(props.createdOn);
    const createdOnDateStr = createdOnDate.toLocaleDateString("en-IN", {
        timeZone: "Asia/Kolkata",
        year: "numeric",
        month: "short",
        day: "numeric"
    });

    return (
        <>
            <Link href={`/video/${props.id}`} className="video-card">
                <Image src={props.thumbnailSrc} alt="video thumbnail image" width={290} height={160} className="thumbnail" />
                <article>
                    <div>
                        <figure>
                            <Image src={props.creatorImg} alt="avatar" width={34} height={34} className="rounded-full aspect-square" />
                            <figcaption>
                                <h3>{props.creator}</h3>
                                <p>{props.isPublic ? "Shared" : "Not Shared"}</p>
                            </figcaption>
                        </figure>
                        <aside>
                            <Image src="/assets/icons/eye.svg" alt="view icon" width={16} height={16} />
                            <span>{props.views}</span>
                        </aside>
                    </div>
                    <h2>{props.title} - {createdOnDateStr}</h2>
                </article>
                <button className="copy-btn" onClick={() => { router.push("/video/copy") }}>
                    <Image src="/assets/icons/link.svg" alt="Copy video link icon" width={18} height={18} />
                </button>
                {props.duration && (<div className="duration">
                    {Math.ceil(props.duration / 60)}min
                </div>)}
            </Link>
        </>
    )
}

export default VideoCard;