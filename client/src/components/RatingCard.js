import React from 'react'
import { Grid, Card, Button} from 'semantic-ui-react'

function RatingCard({rating, deleteRating, updateRating}) {
// const {id, rating} = rating

function handleDeleteRating(id) {
    fetch(`/ratings/${id}`, {
        method: 'DELETE',
        headers: { Accept: 'application/json'},
    }).then((r) => {
        if (r.ok) {
            deleteRating(id);
        }
    });
}


function handleUpdateRating(id){
    fetch(`/ratings/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({rating: rating}),
    })
    .then((r) => r.json())
    .then((updatedRating) => {
        updateRating(updatedRating);
    });
}

  return (
    <div>
          <Grid>
        <Grid.Row> 
        
            <p />
      <Card>
      <Card.Content>
        <p>{rating.experience.name}</p>
        <li> {rating.rating}</li>
        <Button onClick={handleUpdateRating}>Modify</Button>
        <Button onClick={() => handleDeleteRating(rating.id)}>Delete</Button>
        </Card.Content>
        </Card>
  
  </Grid.Row>
  </Grid>
    </div>
  )
}

export default RatingCard