import { GetServerSideProps } from "next"; 
import Head from "next/head";
import { FC } from "react";
import ContactInfo from "../../components/ContactInfo";
import { constanType } from "../../types";

type contactTypeProps = {
   contact: constanType
}

export const getServerSideProps:GetServerSideProps = async (context) => {
   const { id } = context.params;
   const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
   const data = await response.json();

   if (!data) {
      return {
         notFound: true,
      }
   }

   return {
      props: { contact: data },
   }
};

const Contact:FC<contactTypeProps> = ({contact}) => (
   <>
      <Head>
         <title>
            contact
         </title>
      </Head>
      <ContactInfo contact={contact}/>
   </>
  
)
export default Contact;