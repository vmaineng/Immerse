//import React, { useState, useEffect } from "react";
import ExperienceCard from "../components/ExperienceCard";
import { Header } from "semantic-ui-react";

function Experience({ experiences }) {
  return (
    <div>
      <Header as="h1">Experience</Header>
      {experiences.map((experience) => (
        <ExperienceCard key={experience.id} experience={experience} />
      ))}
    </div>
  );
}

export default Experience;
