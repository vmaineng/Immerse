import React from 'react'

function ExperienceCard({experience}) {
  return (
    <div> <p>{experience.name}</p>
    {experience.description}
    {experience.price}
  <button type="submit"> Leave rating </button>
    </div>
  )
}

export default ExperienceCard