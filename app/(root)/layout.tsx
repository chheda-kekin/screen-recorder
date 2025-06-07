import React from "react";
import Navbar from "@/app/components/Navbar";

import { auth } from "@/auth";
import { redirect } from "next/navigation";


const Layout: React.FC<{children: React.ReactNode}> = async ({children}) => {

  // console.log("Navigation layout rendered!!!");

  const session = await auth();

  if(! session) {
    redirect("sign-in");    
  }

  return (
    <>
      <div>
        <Navbar />
        { children }
      </div>
    </>
  )
}

export default Layout;