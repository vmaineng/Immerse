import React from 'react'

function RatingCard({rating, deleteRating, updateRating}) {

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

function handleUpdateRating(){
    fetch(`/ratings/${id}`, {
        method: 'PATCH',
        headers: { 
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({rating: rating}),
    })
    .then((r) => r.json())
    .then((updatedRating) => {
        updateRating(updatedRating);
    });
}

  return (
    <div>RatingCard
        {rating.rating}
        <button onClick={handleUpdateRating}>Modify</button>
        <button onClick={handleDeleteRating}>Delete</button>
    </div>
  )
}

export default RatingCard