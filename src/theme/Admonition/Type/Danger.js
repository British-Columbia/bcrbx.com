import React from "react";
import clsx from "clsx";
import Translate from "@docusaurus/Translate";
import AdmonitionLayout from "@theme/Admonition/Layout";
import IconWarning from "@theme/Admonition/Icon/Warning";
const infimaClassName = "alert alert--danger";
const defaultProps = {
	icon: <IconWarning />,
	title: (
		<Translate
			id="theme.admonition.danger"
			description="The default label used for the Danger admonition (:::danger)"
		>
			danger
		</Translate>
	),
};
export default function AdmonitionTypeDanger(props) {
	return (
		<AdmonitionLayout
			{...defaultProps}
			{...props}
			className={clsx(infimaClassName, props.className)}
		>
			{props.children}
		</AdmonitionLayout>
	);
}
