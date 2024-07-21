import clsx from "clsx";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import HomepageFeatures from "../components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function Hero() {
	return (
		<header className={clsx("hero hero--primary", styles.heroBanner)}>
			<div className="container">
				<Heading as="h1" className="hero__title">
					bcrbx.com
				</Heading>
				<p className="hero__subtitle">
					The official website of the BC community.
				</p>
				<div className={styles.buttons}>
					<Link className="button button--secondary button--lg" to="/community">
						About the community
					</Link>
				</div>
			</div>
		</header>
	);
}

export default function Home() {
	return (
		<Layout
			title="Home"
			description="The official website of the BC community."
		>
			<Hero />
			<main>
				<HomepageFeatures />
			</main>
		</Layout>
	);
}
