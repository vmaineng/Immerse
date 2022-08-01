import React from 'react'
import { Grid, Card} from "semantic-ui-react";

function Search({ searchTerm, onSearchChange }) {
    return (
      <div>
          <Grid>
        <Grid.Row>
   
      <Card centered stackable>
            <Card.Content>
        <label htmlFor="search">Search Experiences:</label>
        <input
          type="text"
          id="search"
          placeholder="Type a name to search..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
         </Card.Content>
      </Card>
      </Grid.Row>
      </Grid>
      </div>
  )
}

export default Search