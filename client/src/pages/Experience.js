//import React, { useState, useEffect } from "react";
import ExperienceCard from "../components/ExperienceCard";
import { Header } from "semantic-ui-react";
// import Search from "../components/Search";

function Experience({experiences}) {
  // const [experiences, setExperience] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");

  // useEffect(() => {
  //   fetch("/experiences")
  //     .then((r) => r.json())
  //     .then(setExperience);
  // }, []);

  // const displayedExperience = experiences.filter((experience) => {
  //   return experience.name.toLowerCase().includes(searchTerm.toLowerCase());
  // });

  // const experienceCards = experiences.map((experience) => (
  //   <ExperienceCard experience={experience} />
  // ));

  return (
    // <div className="homeContainer">
    <div>
      {/* <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} /> */}
      <Header as="h1">Experience</Header>
      {experiences.map((experience) => (
        <ExperienceCard experience={experience} />
      ))}
    </div>
  );
}

export default Experience;
