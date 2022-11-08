import { headingType } from "../types";

const Heading = ({tag, text}:headingType) => {
   const Tag = tag || 'h1';
   return <Tag>{ text}</Tag>
}
export default Heading;