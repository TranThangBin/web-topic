import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export function GameCard({
	id,
	name,
	releaseDate,
	description,
	thumbnail,
	as,
	handleDelete,
}) {
	const formatter = new Intl.DateTimeFormat("vi-VN", {
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
	});
	return (
		<Card bg="dark" text="white" as={as}>
			<Card.Header>#{id}</Card.Header>
			<div className="tw:aspect-square tw:overflow-hidden tw:rounded-b-sm">
				<Card.Img
					variant="top"
					src={"/images/" + thumbnail}
					alt={`thumbnail of ${name}`}
				/>
			</div>
			<Card.Body className="tw:grid">
				<Card.Title>{name}</Card.Title>
				<Card.Text>{description}</Card.Text>
				<Card.Text>
					Release date: {formatter.format(releaseDate)}
				</Card.Text>
			</Card.Body>
			<Button onClick={() => handleDelete(id)} variant="danger">
				Delete game
			</Button>
		</Card>
	);
}
