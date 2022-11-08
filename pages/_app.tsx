/* eslint-disable @next/next/no-page-custom-font */
import { AppProps } from "next/app";
import Head from "next/head";
import Layout from '../components/Layout'
import Image from 'next/image'
import youtubeImg from "../public/youtube.png"
import '../styles/globals.scss'

const MyApp = ({ Component, pageProps }:AppProps) => (
   <Layout>
      <Head>
         <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet"/>
      </Head>
      <main>
          <Component {...pageProps} />
      </main>
      {/* <Image
         src={youtubeImg}
         alt="preview"
         width={812}
         height={500}
         placeholder="blur"
      /> */}
   </Layout>
)

export default MyApp
