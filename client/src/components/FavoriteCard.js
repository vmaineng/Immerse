import React from "react";
import { Grid, Card, Button } from "semantic-ui-react";

function FavoriteCard({ favorite, deleteFavorite, updateFavorite }) {
  const { id, completed: isCompleted } = favorite;

  function handleDelete(id) {
    fetch(`/favorites/${id}`, {
      method: "DELETE",
      headers: { Accept: "application/json" },
    }).then((r) => {
      if (r.ok) {
        deleteFavorite(id);
      }
    });
  }

  function handleIsCompleted() {
    fetch(`/favorites/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !isCompleted }),
    })
      .then((r) => r.json())
      .then((updatedFavorite) => {
        updateFavorite(updatedFavorite);
      });
  }

  return (
    <div>
      <Grid>
        <Grid.Row>
          <p />
          <Card>
            <Card.Content>
              <p> {favorite.experience.name}</p>
              <img src = {favorite.experience.image} alt ="favorite" />
              <Card.Description>
                {" "}
                {favorite.experience.description}
              </Card.Description>
              <Button onClick={handleIsCompleted}>
                {isCompleted ? "Wishlist" : "Done"}
              </Button>
              <Button onClick={() => handleDelete(favorite.id)}>Delete</Button>
            </Card.Content>
          </Card>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default FavoriteCard;
