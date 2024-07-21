import React from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";

export default function NotFoundContent({ className }) {
	return (
		<main className={clsx("container margin-vert--xl", className)}>
			<div className="row">
				<div className="col col--6 col--offset-3">
					<Heading as="h1" className="hero__title">
						Page not found
					</Heading>
					<p className="lead-text">
						We could not find what you were looking for. If this page previously
						existed, it might've been moved or deleted.
					</p>
					<p>If you entered a web address, check it is correct.</p>
					<p>
						If you clicked on a link on this site, please let us know where so
						we can fix it.
					</p>
					<p>
						If you were sent to this page by someone, please let them know their
						link is broken.
					</p>
				</div>
			</div>
		</main>
	);
}
