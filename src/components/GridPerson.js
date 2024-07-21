export default function GridPerson({ Name, Title, Img, Bio }) {
	return (
		<div className="col col--3 margin-bottom--lg">
			{Img && (
				<img
					src={Img}
					className="margin-bottom--sm"
					style={{
						display: "block",
						objectFit: "cover",
						objectPosition: "center",
						maxWidth: "168px",
						maxHeight: "168px",
						width: "100%",
						height: "auto",
					}}
				/>
			)}
			<p
				className="margin--none margin-bottom--xs text--bold"
				style={{ fontSize: "1.05rem" }}
				dangerouslySetInnerHTML={{ __html: Name }}
			/>
			<p className="margin--none" dangerouslySetInnerHTML={{ __html: Title }} />
			{Bio && (
				<p
					className="margin-none margin-top--sm"
					dangerouslySetInnerHTML={{ __html: Bio }}
				/>
			)}
		</div>
	);
}
