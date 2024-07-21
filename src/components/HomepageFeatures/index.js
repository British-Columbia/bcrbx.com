import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

const FeatureList = [
	{
		title: "Community",
		description: (
			<>
				Find detailed information on the community, from{" "}
				<Link to="/victoria">Victoria</Link> to{" "}
				<Link to="/history">history</Link> to{" "}
				<Link to="/elections">elections</Link>.
			</>
		),
		btnTo: "/community",
		btnText: "Learn more",
	},
	{
		title: "Government",
		description: (
			<>
				Learn about how the BC government works, see{" "}
				<Link to="/gov/cabinet">who's who</Link> or{" "}
				<Link to="/gov/organisations">what's what</Link>.
			</>
		),
		btnTo: "/gov",
		btnText: "Learn more",
	},
	{
		title: "Social",
		description: (
			<>
				Engage on the Twitter-like{" "}
				<a href="https://social.bcrbx.com/about" target="_blank">
					BC Social
				</a>{" "}
				platform, powered by Mastodon.
			</>
		),
		btnTo: "/social",
		btnText: "Learn more",
	},
];

function Feature({ title, description, btnText, btnTo }) {
	return (
		<div className={clsx("col col--4")}>
			<div className="text--center padding-horiz--md">
				<Heading as="h3">{title}</Heading>
				<p>{description}</p>
				<Link
					className="button button--primary button--outline button--md"
					to={btnTo}
				>
					{btnText}
				</Link>
			</div>
		</div>
	);
}

export default function HomepageFeatures() {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
