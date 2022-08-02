import React, {useState} from "react";
import { Grid, Card, Button } from "semantic-ui-react";



function RatingCard({ rating, deleteRating, updateRating }) {
 
  const [ratings, setRating] = useState(0);
  

  function handleDeleteRating(id) {
    fetch(`/ratings/${id}`, {
      method: "DELETE",
      headers: { Accept: "application/json" },
    }).then((r) => {
      if (r.ok) {
        deleteRating(id);
      }
    });
  }

  function handleUpdateRating(id) {
    fetch(`/ratings/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rating: rating }),
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
              {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= ratings ? "on" : "off"}
            onClick={() => setRating(index)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
              <li> {rating.rating}</li>
              <Button onClick={handleUpdateRating}>Modify</Button>
              <Button onClick={() => handleDeleteRating(rating.id)}>
                Delete
              </Button>
            
            </Card.Content>
          </Card>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default RatingCard;
