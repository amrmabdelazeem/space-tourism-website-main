import "./destination.scss";
import data from "../../data.json";
import { useState } from "react";

export default function Destination() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const names = data.destinations.map((item) => item.name);

  return (
    <main className="destination">
      <header>
        <span>01</span>
        <h5>Pick your destination</h5>
      </header>
      <img src={data.destinations[currentIndex].images.webp} alt="moon-image" />
      <ul>
        {names.map((dName, index) => {
          return (
            <li
              key={dName}
              style={
                names[currentIndex] !== dName
                  ? { borderBottom: "none" }
                  : { borderBottom: "3px solid #ffffff" }
              }
            >
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentIndex(index);
                }}
                style={names[currentIndex] !== dName ? { color: "#D0D6F9" } : { color: "#fff" }}
              >
                {dName}
              </a>
            </li>
          );
        })}
      </ul>
      <h2>{names[currentIndex]}</h2>
      <p>{data.destinations[currentIndex].description}</p>
      <hr />
      <section className="articles">
        <article>
          <h3>AVG. DISTANCE</h3>
          <h4>{data.destinations[currentIndex].distance}</h4>
        </article>
        <article>
          <h3>Est. travel time</h3>
          <h4>{data.destinations[currentIndex].travel}</h4>
        </article>
      </section>
    </main>
  );
}
