import React, { useEffect, useState } from "react";
import NetflexBannerLogo from "../../assets/image/logo.png";
import { Play, Info } from "lucide-react";
import styles from "./Banner.module.css";
import { movieInstance } from "../../Utility/MovieInstance";
import requests from "../../Utility/requestUrls";

function Banner() {
  const [bannerImage, setBannerImage] = useState({});

  const imageUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchBannerImage() {
      const request = await movieInstance.get(
        requests.fetchNetflixOriginals
      );

      setBannerImage(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
    }

    fetchBannerImage();
  }, []);

function truncate(str,n){
  return str?.length>n ? str.substr(0,n-1)+"..." :str
}






  return (
    <div
      className={styles.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("${imageUrl}${bannerImage.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className={styles.contents}>
        {/* netflix image */}
        <img
          className={styles.logoImg}
          src={NetflexBannerLogo}
          alt="Netflix logo"
        />

        {/* title */}
        <h1 className={styles.title}>
          {bannerImage?.title ||
            bannerImage?.name ||
            bannerImage?.original_name}
        </h1>

        {/* description */}
        <h1 className={styles.description}>
          {truncate(bannerImage?.overview,120)}
        </h1>

        {/* buttons */}
        <div className={styles.buttonContainer}>
          <button className={styles.button}>
            <Play size={20} />
            Play
          </button>

          <button className={styles.button}>
            <Info size={20} />
            My List
          </button>
        </div>
      </div>

      {/* fading */}
      <div className={styles.fadeButton}></div>
    </div>
  );
}

export default Banner;