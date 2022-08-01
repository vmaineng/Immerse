import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Grid, Card, Button } from "semantic-ui-react";
import Moment from 'moment';

function ExperienceCard({ experience }) {
  const formatDate = Moment().format('MMM Do YY')

  function handleAddFavorite(e) {
    fetch("/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ experience_id: experience.id }),
    });
  }

  const locales = {
    "en-US": require("date-fns/locale/en-US"),
  };
  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });

  const events = [
    {
      title: "Big Meeting",
      allDay: true,
      start: new Date(2021, 6, 0),
      end: new Date(2021, 6, 0),
    },
    {
      title: "Vacation",
      start: new Date(2021, 6, 7),
      end: new Date(2021, 6, 10),
    },
    {
      title: "Conference",
      start: new Date(2021, 6, 20),
      end: new Date(2021, 6, 23),
    },
  ];

  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);
  }

  //each javascript objects need a key-value pair

  function handleAddRating(e) {
    fetch("/ratings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ experience_id: experience.id }),
    });
  }

  //get hotel
  // function handleGetHotel(e) {
  //   fetch('/hotels')
  //   .then(r => r.json())
  //   .then

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
    <div>
      <Grid>
        <Grid.Row>
          <p />
          <Card centered stackable>
            <Card.Content>
              <Card.Header textAlign="center">{experience.name}</Card.Header>
              <Card.Description textAlign="center">
                {experience.description}
              </Card.Description>
              {experience.price}
              {formatDate} 
              {experience.dt_booked_from}
              {formatDate}
              {experience.dt_booked_to}
              {/* {have to format this better} */}
              <Button basic color="purple" onClick={handleAddRating}>
                {" "}
                Leave rating{" "}
              </Button>
              <Button basic color="blue" onClick={handleAddFavorite}>
                Save Deal
              </Button>

              <input
                type="text"
                placeholder="Add Title"
                style={{ width: "20%", marginRight: "10px" }}
                value={newEvent.title}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, title: e.target.value })
                }
              />
              <DatePicker
                placeholderText="Start Date"
                style={{ marginRight: "10px" }}
                selected={newEvent.start}
                onChange={(start) => setNewEvent({ ...newEvent, start })}
              />
              <DatePicker
                placeholderText="End Date"
                selected={newEvent.end}
                onChange={(end) => setNewEvent({ ...newEvent, end })}
              />
              <Button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
                Add Event
              </Button>
            </Card.Content>
          </Card>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default ExperienceCard;


//might have to add calendar date to when the experience card is booked vs saving a deal 