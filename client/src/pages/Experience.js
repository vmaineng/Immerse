import React, { useState, useEffect } from 'react';
import ExperienceCard from '../components/ExperienceCard';

function Experience() {
const [experiences, setExperience] = useState([]);

useEffect(() => {
    fetch('/experiences')
    .then(r => r.json())
    .then(setExperience);
}, []);



const experienceCards = experiences.map((experience) => (
    <ExperienceCard
        experience={experience}
        />
))



  return (
    <div>Experience
        {experienceCards}
    </div>
  )
}

export default Experience