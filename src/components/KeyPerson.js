export default function FeatPerson({ Name, Title, Img, Bio }) {
	return (
		<div className="row margin-bottom--lg">
			{Img && (
				<div
					className="col col--2"
					style={{
						"--ifm-col-width": "200px",
					}}
				>
					<img
						src={Img}
						style={{
							display: "block",
							objectFit: "cover",
							objectPosition: "center",
							maxWidth: "200px",
							maxHeight: "200px",
							width: "100%",
							height: "auto",
						}}
					/>
				</div>
			)}
			<div className="col">
				<p
					className="margin--none margin-top--xs margin-bottom--xs text--bold"
					style={{ fontSize: "1.15rem" }}
					dangerouslySetInnerHTML={{ __html: Name }}
				/>
				<p
					className="margin--none"
					dangerouslySetInnerHTML={{ __html: Title }}
				/>
				{Bio && (
					<p
						className="margin-none margin-top--sm"
						dangerouslySetInnerHTML={{ __html: Bio }}
					/>
				)}
			</div>
		</div>
	);
}
