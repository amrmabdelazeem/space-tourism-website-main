import "./crew.scss";
import data from "../../data.json";
import { useState } from "react";

export default function Crew() {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <main className="crew">
      <header>
        <span>02</span>
        <h5>Pick your crew</h5>
      </header>
      <article className="crew-photo">
        <img src={data.crew[currentIndex].images.webp} alt="crew" />
      </article>
      <article className="crew-info">
        <div className="slider-dots">
          <span className="slider-dot"></span>
          <span className="slider-dot"></span>
          <span className="slider-dot"></span>
          <span className="slider-dot"></span>
        </div>
        <h3> {data.crew[currentIndex].role}</h3>
        <h4>{data.crew[currentIndex].name}</h4>
        <p>{data.crew[currentIndex].bio}</p>
      </article>
    </main>
  );
}
