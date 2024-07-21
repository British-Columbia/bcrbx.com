import React from "react";
import clsx from "clsx";
import { ThemeClassNames } from "@docusaurus/theme-common";
import styles from "./styles.module.css";

function AdmonitionContainer({ type, className, children }) {
	return (
		<div
			className={clsx(
				ThemeClassNames.common.admonition,
				ThemeClassNames.common.admonitionType(type),
				styles.admonition,
				className
			)}
		>
			{children}
		</div>
	);
}

function AdmonitionContent({ children }) {
	return children ? (
		<div className={styles.admonitionContent}>{children}</div>
	) : null;
}
export default function AdmonitionLayout(props) {
	const { type, icon, children, className } = props;
	return (
		<AdmonitionContainer type={type} className={className}>
			<span className={styles.admonitionIcon}>{icon}</span>
			<AdmonitionContent>{children}</AdmonitionContent>
		</AdmonitionContainer>
	);
}
