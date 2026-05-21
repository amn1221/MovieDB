import React from "react";
import styles from "./MovieCard.module.css";

import { FaCirclePlay } from "react-icons/fa6";
import { BsPlusCircle } from "react-icons/bs";
import { GoCheckCircleFill } from "react-icons/go";
import { IoIosArrowDropdownCircle } from "react-icons/io";

function MovieCard({ movie }) {
  let genres = ["Adventure", "Action", "Thriller"];

  const imageUrl = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`;

  return (
    <div className={styles.cardWrapper}>
      {/* poster image */}
      <img
        className={styles.poster}
        src={imageUrl}
        alt={movie?.title || movie?.name}
      />

      {/* hover card */}
      <div className={styles.hoverCard}>
        {/* hover image */}
        <img
          className={styles.hoverImage}
          src={imageUrl}
          alt={movie?.title || movie?.name}
        />

        {/* badge */}
        <div className={styles.badge}>Recently Added</div>

        {/* buttons */}
        <div className={styles.buttonsRow}>
          <FaCirclePlay
            className={styles.circleButton}
            color="white"
            size={40}
          />

          <BsPlusCircle
            className={styles.circleButton}
            color="white"
            size={40}
          />

          <GoCheckCircleFill
            className={styles.circleButton}
            color="white"
            size={40}
          />

          <IoIosArrowDropdownCircle
            className={styles.circleButtonSmall}
            color="white"
            size={40}
          />
        </div>

        {/* metadata */}
        <div className={styles.metaRow}>
          <span className={styles.tag}>U/A 16+</span>
          <span className={styles.tag}>
            {movie?.media_type === "tv" ? "Series" : "Movie"}
          </span>
          <span className={styles.tag}>HD</span>
        </div>

        {/* title */}
        <div className={styles.genres}>
          <strong>{movie?.title || movie?.name}</strong>
        </div>

        {/* genres */}
        <div className={styles.genres}>
          {genres?.map((g, index) => (
            <span key={index}>
              {g}
              {index < genres.length - 1 && (
                <span className={styles.dot}> • </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;