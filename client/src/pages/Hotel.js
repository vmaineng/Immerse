import React, { useState, useEffect } from "react";
import HotelCard from "../components/HotelCard";

function Hotel() {
  const [hotels, setHotel] = useState([]);

  useEffect(() => {
    fetch("/hotels")
      .then((r) => r.json())
      .then(setHotel);
  }, []);

  const hotelCards = hotels.map((hotel) => (
    <HotelCard key={hotel.id} hotel={hotel} />
  ));

  return (
    <div>
      Hotel
      {hotelCards}
    </div>
  );
}

export default Hotel;
