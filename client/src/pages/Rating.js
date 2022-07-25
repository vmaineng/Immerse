import React, {useState, useEffect} from 'react'
import RatingCard from '../components/RatingCard';


function Rating() {
    const [ratings, setRatings] = useState([]);

useEffect(() => {
    fetch('/ratings')
    .then(r=> r.json())
    .then(setRatings);
}, []);

function deleteRating(id) {
    const updatedRatings = ratings.filter((rating) => rating.id !== id);
    setRatings(updatedRatings);
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
))

  return (
    <div>Rating
        {ratingCards}
    </div>
  )
}

export default Rating