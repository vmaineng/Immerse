import React from "react";
import { Grid, Card } from "semantic-ui-react";

function HotelCard({ hotel }) {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <p />
          <Card>
            <Card.Content>
              <Card.Header>
                {" "}
                <p>{hotel.name}</p>
              </Card.Header>
              <Card.Description>
                <a href={hotel.location}>Click link</a>
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default HotelCard;
