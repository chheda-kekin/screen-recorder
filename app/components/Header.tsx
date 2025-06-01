import React from "react";
import Image from "next/image";
import Link from "next/link";
import DropdownList from "@/app/components/DropdownList";



const Header: React.FC<{title: string, subTitle: string, userImg?: string}> = (props) => {

    return (
        <header className="header">
            <section className="header-container">
                <div className="details">
                    {props.userImg && <Image src={ props.userImg } 
                            alt="user_img" width={66} height={66} className="rounded-full" />}
                    <article>
                        <p>{props.subTitle}</p>
                        <h1 className="text-3xl">{props.title}</h1>
                    </article>
                </div>
                <aside>
                    <Link href="/upload">
                        <Image src="/assets/icons/upload.svg" alt="Upload icon" width={16} height={16} />
                        Upload a video
                    </Link>
                    <div className="record">
                        <button className="primary-btn">
                            <Image src="/assets/icons/record.svg" alt="Record icon" width={16} height={16} />
                            <span>Record a video</span>
                        </button>
                    </div>
                </aside>
            </section>
            <section className="search-filter">
                <div className="search">
                    <input type="text" placeholder="Search for videos, tags or folders..." />
                    <Image src="/assets/icons/search.svg" alt="Search icon" height={20} width={20} />
                </div>
                <DropdownList />
            </section>
        </header>
    )
}

export default Header;