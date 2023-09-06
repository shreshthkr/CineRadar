import React from "react";
import "./TvCard.css";

const TvCard = ({ tvshow }) => {
  const releaseDate = new Date(tvshow.first_air_date);
  const dateFormatOptions = { day: "2-digit", month: "short", year: "numeric" };
  const formattedReleaseDate = releaseDate.toLocaleDateString(
    undefined,
    dateFormatOptions
  );
  return (
    <div className="tvshow-box">
      <div className="tvshow-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${tvshow.poster_path}`}
          alt={tvshow.original_title}
        />
      </div>
      <div className="tvshow-info">
        <div className="tvshow-title">
          <p>{tvshow.name}</p>
        </div>
        <div className="tvshow-release-date">
          <p>{formattedReleaseDate}</p>
        </div>
      </div>
    </div>
  );
};

export default TvCard;
