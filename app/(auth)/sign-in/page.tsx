import { appName } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
    return (
        <>
            <main className="sign-in">
                <aside className="testimonial">
                    <Link href="/">
                        <Image src="/assets/icons/logo.svg" alt="App logo" width={32} height={32} />
                        <h1>{appName}</h1>
                    </Link>
                </aside>
                <aside className="google-sign-in">
                    <section>
                        <Link href="/">
                            <Image src="/assets/icons/logo.svg" alt="App logo" width={40} height={40} />
                            <h1>{appName}</h1>
                        </Link>
                        <p>Create & share your very first <span>{appName} video </span>in no time!</p>
                        <button>
                            <Image src="/assets/icons/google.svg" alt="Google logo" width={22} 
                            height={22} />
                            <span>Sign in with Google</span>
                        </button>
                    </section>
                </aside>
            </main>
        </>
    )
}

export default Page;