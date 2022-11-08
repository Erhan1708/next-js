import Heading from "../../components/Heading";
import Link from "next/link";
import Head from "next/head";
import { GetStaticProps } from "next";
import { constanType } from "../../types";
import { FC } from "react";

type contactsTypeProps = {
   contacts: [constanType]
}

export const getStaticProps:GetStaticProps = async () => {
   const response = await fetch("https://jsonplaceholder.typicode.com/users");
   const data = await response.json();

   if (!data) {
      return {
         notFound:true,
      }
   }

   return {
      props: { contacts: data },
   }
};

const Contacts:FC<contactsTypeProps> = ({ contacts }) => (
   <>
      <Head>
         <title>
            Contacts
         </title>
      </Head>
      <Heading text="contacts list:" tag={undefined} />
      <ul>
         {contacts && contacts.map( item => (
            <li key={item.id}>
               <Link href={`/contacts/${item.id}`}><b>{item.name}</b></Link>
            </li>
         ))}
      </ul>
   </>
)
export default Contacts;