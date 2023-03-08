import "../styles/globals.css";
import "overlayscrollbars/overlayscrollbars.css";
import type { AppProps } from "next/app";
import MetaTags from "@/ui/metaTags/MetaTags";
import {FC} from "react";
import Header from '@/modules/Header/Header';

const App:FC<AppProps> = ({ Component, pageProps }) => {
  return (
      <>
        <MetaTags />
        <Header />
        <Component {...pageProps} />
      </>
  )
}

export default App;