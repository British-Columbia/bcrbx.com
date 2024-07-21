import React from "react";
import clsx from "clsx";
import EditThisPage from "@theme/EditThisPage";
import LastUpdated from "@theme/LastUpdated";
import styles from "./styles.module.css";
export default function EditMetaRow({ className, editUrl, lastUpdatedAt }) {
	return (
		<div className={clsx("row", className)}>
			<div className={clsx("col", styles.lastUpdated)}>
				{lastUpdatedAt && <LastUpdated lastUpdatedAt={lastUpdatedAt} />}
			</div>
			<div className={clsx("col", styles.editPage)}>
				{editUrl && <EditThisPage editUrl={editUrl} />}
			</div>
		</div>
	);
}
