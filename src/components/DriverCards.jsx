import { useState } from "react";

// create one DriverCard component
function DriverCard({
  age,
  name,
  number,
  team,
  podiums,
  wins,
  championships,
  favoriteStatus,
  setFav,
  photo,
}) {
  // sets useStates of showImage to false
  const [showImage, flipCard] = useState(false);

  return (
    <div className="card">
      <div className={`cardInner ${showImage ? "flipped" : ""}`}>
        {/* shows either image or information based on useState of showImage */}
        {showImage ? (
          <div className="cardBack">
            <img src={photo} alt={`${name} image`} />
          </div>
        ) : (
          <div className="cardFront">
            <h2>{name}</h2>
            <h4>Team: {team}</h4>
            <p>Age: {age}</p>
            <p>Number: {number}</p>
            <p>Podiums: {podiums}</p>
            <p>Race Wins: {wins}</p>
            <p>World Champion: {championships ? "Yes" : "No"}</p>
          </div>
        )}
      </div>
      {/* button to set driver as favorite */}
      <button className="favoriteButton" onClick={() => setFav(name)}>
        {favoriteStatus ? "★" : "☆"}
      </button>
      {/* button to flip card to show image */}
      <button className="flipButton" onClick={() => flipCard(!showImage)}>
        Flip
      </button>
    </div>
  );
}

export default DriverCard;
