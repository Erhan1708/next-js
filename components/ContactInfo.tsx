import {FC} from "react"
import { constanType } from "../types";
import Heading from "./Heading";

type contactInfoProps = {
   contact:constanType,
}

const ContactInfo:FC<contactInfoProps> = ({contact}) => {
   const { name, email, address } = contact || {};
   const { street, suite, city, zipcode } = address || {};

   if (!contact) {
      return <Heading tag="h3" text="Empty contact"/>
   }

   return (
      <>
         <Heading tag="h3" text={name} />
         <div>
            <b>Email:</b>
            {email}
         </div>
         <div>
            <b>Address:</b>
            {`${street}, ${suite}, ${city}, ${zipcode}`}
         </div>
      </>
   );
}

export default ContactInfo