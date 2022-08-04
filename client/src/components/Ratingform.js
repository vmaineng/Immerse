import React, { useState } from "react";
import { Card, Button } from "semantic-ui-react";

function Ratingform({ onAddRating, id }) {
  const [rating, setRating] = useState([]);
  // const [ratings, setRatings] = useState(0);

  const newRatingForm = {
    experience_id: id,
    rating: rating,
  };

  const [formData, setFormData] = useState(newRatingForm);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
      }),
    };

    fetch("/ratings", config)
      .then((r) => r.json())
      .then((newRating) => {
        onAddRating(newRating);
      });
    setFormData(newRatingForm);
  }

  return (
    <div>
      <h2>Ratingform</h2>
      <form onSubmit={handleSubmit}>
        <Card>
          <Card.Content>
            {/* {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                  <button
                    type="button"
                    key={index}
                    className={index <= rating ? "on" : "off"}
                    onClick={() => setRating(index)}
                  >
                    <span className="star">&#9733;</span>
                  </button>
                );
              })} */}
            <input
              type="number"
              name="rating"
              placeholder="Insert rating"
              value={formData.rating}
              onChange={handleChange}
            />
            <Button type="submit">Add Rating</Button>
          </Card.Content>
        </Card>
      </form>
    </div>
  );
}

export default Ratingform;
