import React, {useState, useEffect} from 'react'
import RatingCard from '../components/RatingCard';


function Rating() {
    const [reviews, setReviews] = useState([]);

useEffect(() => {
    fetch('/ratings')
    .then(r=> r.json())
    .then(setReviews);
}, []);

function deleteRating(id) {
    const updatedRatings = reviews.filter((rating) => rating.id !== id);
    setReviews(updatedRatings);
}


function handleUpdateRating(updatedRating) {
    const updatedRatingsArray = reviews.map((rating) => {
        return rating.id === updatedRating.id ? updatedRating : rating;
    });
    setReviews(updatedRatingsArray);
}

const ratingCards = reviews.map((review) => (
    <RatingCard
    review={review}
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