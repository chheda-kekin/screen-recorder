import React from "react";
import Navbar from "@/app/components/Navbar";

const Layout: React.FC<{children: React.ReactNode}> = ({children}) => {
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