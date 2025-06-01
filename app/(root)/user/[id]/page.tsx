import Header from "@/app/components/Header";
import React from "react";



const Page: React.FC<{params: {id: string}}> = ({params}) => {

    const { id } = params;

    return (
        <>
            <main>
                <section className="wrapper page">
                    <Header title="Kekin Chheda" subTitle="kekincchheda@gmail.com" userImg="/assets/images/dummy.jpg" />
                    <div className="text-2xl font-karla">{`User profile page ${id}`}</div>
                </section>
            </main>
        </>
    );
}

export default Page;