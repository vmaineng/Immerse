import React from 'react'
import { Grid, Card, Button} from 'semantic-ui-react'

function ExperienceCard({experience}) {

function handleAddFavorite(e) {
  fetch('/favorites', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({experience_id: experience.id}),
  });
}

//each javascript objects need a key-value pair

function handleAddRating(e) {

fetch('/ratings', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({experience_id: experience.id}),
});
}


//get hotel
// function handleGetHotel(e) {
//   fetch('/hotels')
//   .then(r => r.json())
//   .then

// const handleRating= () => {
//   const udpatedRatings = {
//     ratings: experience.ratings + 1,
//   }

//   const config = {
//     method: "PATCH",
//     headers: {'Content-Type': 'application/json'}, 
//     body: JSON.stringify({updatedRatings})
//   }
//   fetch(`/ratings/${id}`, config)
//   .then (r => r.json())
  
// }
  return (
   
    <div>  
      <Grid>
        <Grid.Row> 
        
            <p />
      <Card>
      <Card.Content>
      <Card.Header>{experience.name}</Card.Header>
    <Card.Description>{experience.description}</Card.Description>
    {experience.price}
    {experience.dt_booked_from}
    {experience.dt_booked_to}
  <Button basic color ='purple' onClick={handleAddRating}> Leave rating </Button>
  <Button basic color='blue' onClick={handleAddFavorite} >Save Deal</Button>
  </Card.Content>
    </Card>
  
    </Grid.Row>
    </Grid>
    </div>
  )
}

export default ExperienceCard