import Header from "@/app/components/Header";
import VideoList from "@/app/components/VideoList";
import React from "react";



const Page: React.FC<{params: {id: string}}> = ({params}) => {

    const { id } = params;

    return (
        <>
            <main>
                <section className="wrapper page">
                    <Header title="Kekin Chheda" subTitle="kekincchheda@gmail.com" userImg="/assets/images/dummy.jpg" />
                    <VideoList />
                </section>
            </main>
        </>
    );
}

export default Page;