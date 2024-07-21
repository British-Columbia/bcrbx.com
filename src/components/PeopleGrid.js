import GridPerson from "@site/src/components/GridPerson";

export default function PeopleGrid({ People }) {
	return (
		<div className="row">
			{People.map((props, idx) => (
				<GridPerson key={idx} {...props} />
			))}
		</div>
	);
}
