import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import { navBar } from "../constants/index"
import styles from "../styles/Navbar.module.scss"
import logo from "../public/logo.png"
import { FC } from "react"

const Navbar:FC = () => {
   const { pathname } = useRouter();

  return (
     <nav className={styles.nav}>
        <div className={styles.logo}>
           <Image src={logo} width={68} height={68} alt="webDev"/>
        </div>
        <div className={styles.links}>
           {navBar.map((item) => (
              <Link className={pathname === item.path ? styles.active : null} key={item.id} href={item.path}>{item.title}</Link>
           ))}
        </div>
     </nav>
  )
}

export default Navbar