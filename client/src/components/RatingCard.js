import React, { useState } from "react";
import { Grid, Card, Button } from "semantic-ui-react";

function RatingCard({ rating, deleteRating, updateRating }) {
  const [updatedRating, setUpdatedRating] = useState(rating);

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

  function handleSubmitRating(e) {
    e.preventDefault();
    fetch(`/ratings/${rating.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rating: updatedRating }),
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
              {/* {[...Array(5)].map((star, index) => {
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
              })} */}
              Rating: {rating.rating}
              <br />
              <form onSubmit={handleSubmitRating}>
                <input
                  type="number"
                  name="updatedRating"
                  placeholder="Insert rating"
                  value={updatedRating}
                  onChange={(e) => setUpdatedRating(e.target.value)}
                />

                <Button type="submit">Modify</Button>
              </form>
              <br />
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
