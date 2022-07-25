import React from 'react'


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
    <div> <p>{experience.name}</p>
    {experience.description}
    {experience.price}
  <button onClick={handleAddRating}> Leave rating </button>
  <button onClick={handleAddFavorite} >Add to favorites</button>
    </div>
  )
}

export default ExperienceCard