import { FC, ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
      children: ReactNode,
   }

const Layout:FC<LayoutProps> = ({ children }) => (
   <>
      <Header />
      {children}
      <Footer/>
   </>
)

export default Layout;