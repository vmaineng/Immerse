import React, { useState, useEffect } from "react";
import FavoriteCard from "../components/FavoriteCard";

function Favorite() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch("/favorites")
      .then((r) => r.json())
      .then(setFavorites);
  }, []);

  function deleteFavorite(id) {
    const updatedFavorites = favorites.filter((favorite) => favorite.id !== id);
    setFavorites(updatedFavorites);
  }

  function handleUpdateFavorite(updatedFavorite) {
    const updatedFavoritesArray = favorites.map((favorite) => {
      return favorite.id === updatedFavorite.id ? updatedFavorite : favorite;
    });
    setFavorites(updatedFavoritesArray);
  }

  const favoriteCards = favorites.map((favorite) => (
    <FavoriteCard
    key={favorite.id}
      favorite={favorite}
      deleteFavorite={deleteFavorite}
      updateFavorite={handleUpdateFavorite}
    />
  ));

  return (
    <div>
      Favorite
      {favoriteCards}
    </div>
  );
}

export default Favorite;
