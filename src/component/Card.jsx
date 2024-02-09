import Card from "react-bootstrap/Card";

function BgColorExample({ data }) {
  return (
    <>
      <Card>
        <Card.Header>{data.id}</Card.Header>
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>{data.body}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default BgColorExample;
