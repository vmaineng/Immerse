import React from 'react'

function ExperienceCard({experience}) {

function handleAddFavorite(e) {
  let id = e.target.value;

  fetch('/favorites', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({id}),
  });
}

  return (
    <div> <p>{experience.name}</p>
    {experience.description}
    {experience.price}
  <button type="submit"> Leave rating </button>
  <button onClick={handleAddFavorite}>Add to favorites</button>
    </div>
  )
}

export default ExperienceCard