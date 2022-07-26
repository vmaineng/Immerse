import React, { useState, useEffect } from 'react';
import ExperienceCard from '../components/ExperienceCard';
import {Header} from 'semantic-ui-react'

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
    <div><Header as='h1'>Experience</Header>
        {experienceCards}
    </div>
  )
}

export default Experience