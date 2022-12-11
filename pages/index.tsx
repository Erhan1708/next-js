import Heading from "../components/Heading";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Socials from "../components/Socials";

export const getStaticProps = async () => {
	try {
		const response = await fetch(`${process.env.API_HOST}/socials`);
		const data = await response.json();

		if (!data) {
			return {
				notFound: true,
			};
		}
		return {
			props: { socials: data },
		};
	} catch {
		return {
			props: { socials: null },
		};
	}
};

const Home = ({ socials }) => (
	<div className={styles.wrapper}>
		<Head>
			<title>Home</title>
		</Head>
		<Heading text="Next.js Application" tag={undefined} />
		<Socials socials={socials} />
	</div>
);
export default Home;
