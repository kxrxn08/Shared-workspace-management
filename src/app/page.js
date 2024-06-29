// import Image from "next/image";
// import styles from "./page.module.css";
import NavBar from "./components/NavBar";
import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import HomepageBreadcrumbs from "./components/HomepageBreadcrumbs"

export default function Home() {
  return (
    // <NavBar/>
    <>
      {/* shared AppRouterCacheProvider */}
      <NavBar/>
      <Divider sx={{
        width:"97%",
        margin: "0 auto",
        opacity: "0.6",
      }}/>
      <HomepageBreadcrumbs/>
      <Divider sx={{
        width:"97%",
        margin: "0 auto",
        opacity: "0.6",
      }}/>
      
    </>
  );
}
