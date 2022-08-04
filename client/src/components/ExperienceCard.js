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
import Ratingform from "../components/Ratingform";

function ExperienceCard({ experience }) {
  const { id, name, image, description, price, dt_booked_from, dt_booked_to } =
    experience;

  //const formatDate = Moment().format("MMM Do YY");
  const [ratings, setRatings] = useState(0);
  const [isOn, setIsOn] = useState(false);

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

  const handleClick = () => setIsOn(true);

  function handleAddRating(newRating) {
    const updatedRatingsArray = [newRating];
    setRatings(updatedRatingsArray);
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
              <Card.Header textAlign="center">{name}</Card.Header>
               <img src={image} alt="" />
              <Card.Description textAlign="center">
                {description}
              </Card.Description>
              price: {price}
              {/* {formatDate}  */}
              <br />
              Date booked from: {dt_booked_from}
              <br />
              {/* {formatDate} */}
              Date booked to: {dt_booked_to}
              {/* {have to format this better} */}

              <Button basic color="purple" onClick={handleClick}>
                {" "}
                Leave a rating
                {isOn && <Ratingform onAddRating={handleAddRating} id={id} />}
              
              </Button>
              <Button basic color="blue" onClick={handleAddFavorite}>
                Save Deal
              </Button>
            
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

