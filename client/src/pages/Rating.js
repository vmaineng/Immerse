import React, { useState, useEffect } from "react";
import RatingCard from "../components/RatingCard";


function Rating() {
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    fetch("/ratings")
      .then((r) => r.json())
      .then(setRatings);
  }, []);

  // function handleAddRating(newRating) {
  //   const updatedRatingsArray = [...ratings, newRating];
  //   setRatings(updatedRatingsArray);
  // }

  function deleteRating(id) {
    const updatedRatingsArray = ratings.filter((rating) => rating.id !== id);
    setRatings(updatedRatingsArray);
  }

  function handleUpdateRating(updatedRating) {
    const updatedRatingsArray = ratings.map((rating) => {
      return rating.id === updatedRating.id ? updatedRating : rating;
    });
    setRatings(updatedRatingsArray);
  }

  const ratingCards = ratings.map((rating) => (
    <RatingCard
      rating={rating}
      deleteRating={deleteRating}
      updateRating={handleUpdateRating}
    />
  ));

  return (
    <div>
      Rating
      {/* <Ratingform onAddRating={handleAddRating}/> */}
      {ratingCards}
    </div>
  );
}

export default Rating;
