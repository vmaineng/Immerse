import React from 'react'
// import { Link} from 'react-router-dom'
import { Grid, Card} from 'semantic-ui-react'

function HotelCard({hotel}) {
  return (
    <div>
      <Grid>
        <Grid.Row> 
        
            <p />
      <Card>
      <Card.Content>
       <Card.Header> <p>{hotel.name}</p></Card.Header>
     
       <Card.Description>{hotel.location}</Card.Description>
        </Card.Content>
        </Card>
        </Grid.Row>
        </Grid>
    </div>
  )
}

export default HotelCard