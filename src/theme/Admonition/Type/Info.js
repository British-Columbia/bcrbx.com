import React from "react";
import clsx from "clsx";
import Translate from "@docusaurus/Translate";
import AdmonitionLayout from "@theme/Admonition/Layout";
import IconNote from "@theme/Admonition/Icon/Note";
const infimaClassName = "alert alert--info";
const defaultProps = {
	icon: <IconNote />,
	title: (
		<Translate
			id="theme.admonition.info"
			description="The default label used for the Info admonition (:::info)"
		>
			info
		</Translate>
	),
};
export default function AdmonitionTypeInfo(props) {
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
