import React from 'react'

function FavoriteCard({favorite, deleteFavorite, updateFavorite}) {
    const { id, completed: isCompleted } = favorite;

    function handleDelete(id) {
      fetch(`/favorites/${id}`, {
        method: 'DELETE',
        headers: { Accept: 'application/json' },
      }).then((r) => {
        if (r.ok) {
          deleteFavorite(id);
        }
      });
    }

    function handleIsCompleted() {
        fetch(`/favorites/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ completed: !isCompleted }),
        })
          .then((r) => r.json())
          .then((updatedFavorite) => {
            updateFavorite(updatedFavorite);
          });
      }

  return (
    <div>FavoriteCard
        {favorite.name}
      <button onClick={handleIsCompleted}>Update</button>
      <button onclick={handleDelete}>Delete</button>
    </div>
  )
}

export default FavoriteCard