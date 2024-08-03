import React from "react";
import clsx from "clsx";
import EditThisPage from "@theme/EditThisPage";
import Link from "@docusaurus/Link";
import { ThemeClassNames } from "@docusaurus/theme-common";
import styles from "./styles.module.css";
import { useDoc, useDateTimeFormat } from "@docusaurus/theme-common/internal";
import * as chrono from "chrono-node";

const MAINTAINER_NAMES = {
	public_service: "BC Public Service",
	publishing: "bcrbx.com publishing team",
};
const MAINTAINER_URLS = {
	public_service: "/gov/public-service",
	publishing: "/publishing",
};

const DATE_OPTIONS = {
	day: "numeric",
	month: "long",
	year: "numeric",
	timeZone: "UTC",
};

export default function EditMetaRow({ className, editUrl, lastUpdatedAt }) {
	const doc = useDoc();
	const {
		last_review,
		review_in,
		maintainer,
		hide_maintainer,
		hide_review,
		hide_updated,
	} = doc.frontMatter;

	const dateTimeFormat = useDateTimeFormat(DATE_OPTIONS);

	const lastUpdate =
		!hide_updated &&
		new Date(
			(hide_review ? lastUpdatedAt : last_review || lastUpdatedAt) ||
				"1970-01-01"
		);

	const reviewIn =
		review_in &&
		last_review &&
		chrono.parseDate(`in ${review_in}`, last_review);

	const maintainerName = MAINTAINER_NAMES[maintainer] || maintainer;

	return (
		<div className={clsx("row", className)}>
			<div className={clsx("col", styles.lastUpdated)}>
				{(lastUpdate || last_review || maintainer) && (
					<span className={ThemeClassNames.common.lastUpdated}>
						{lastUpdate && (
							<>
								Page last {reviewIn && !hide_review ? "reviewed" : "updated"}:{" "}
								<b>
									<time
										dateTime={lastUpdate.toISOString()}
										itemProp="dateModified"
									>
										{dateTimeFormat.format(lastUpdate)}
									</time>
								</b>
							</>
						)}

						{lastUpdate && reviewIn && !hide_review && <br />}
						{reviewIn && !hide_review && (
							<>
								{lastUpdate ? "Next" : "Page"} review due:{" "}
								<b>
									<time dateTime={reviewIn.toISOString()}>
										{dateTimeFormat.format(reviewIn)}
									</time>
								</b>
							</>
						)}

						{(lastUpdate || reviewIn) && maintainer && <br />}
						{maintainer && !hide_maintainer && (
							<>
								{MAINTAINER_URLS[maintainer] ? (
									MAINTAINER_URLS[maintainer].charAt(0) === "/" ? (
										<Link to={MAINTAINER_URLS[maintainer]}>
											{maintainerName}
										</Link>
									) : (
										<a href={MAINTAINER_URLS[maintainer]} target="_blank">
											{maintainerName}
										</a>
									)
								) : (
									maintainerName
								)}
							</>
						)}
					</span>
				)}
			</div>

			<div className={clsx("col", styles.editPage)}>
				{editUrl && <EditThisPage editUrl={editUrl} />}
			</div>
		</div>
	);
}
