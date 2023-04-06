import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Movies({movie}) {
  return (
    <div classname='mc'> 
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title> {movie.title}</Card.Title>
        <Card.Text>
       new movies 
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Movies;