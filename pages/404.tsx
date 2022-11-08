import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Heading from "../components/Heading";
import styles from "../styles/404.module.scss"

const Error = () => {
   const router = useRouter();
   useEffect(() => {
      setTimeout(() => {
         router.push('/')
      },3000)
   },[router])
   return (
      <>
         <Head>
            <title>
               Error
            </title>
         </Head>
   <div className={styles.wrapper}>
      <div>
         <Heading text="404" tag={undefined} />
      <Heading tag="h2" text="проблемка в адресе URl"/>
      </div>
      
   </div>
   </>
   
)
}
export default Error;