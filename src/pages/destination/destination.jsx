import "./destination.scss";
import data from "../../data.json";
import { useState } from "react";

export default function Destination() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const names = data.destinations.map((item) => item.name);
  return (
    <main className="destination">
      <header>
        <span>0{currentIndex + 1}</span>
        <h3>Pick your destination</h3>
      </header>
      <img src={data.destinations[currentIndex].images.webp} alt="moon-image" />
      <ul>
        {names.map((dName) => {
          return (
            <li
              key={dName}
              style={
                names[currentIndex] !== dName
                  ? { borderBottom: "none" }
                  : { borderBottom: "3px solid #ffffff" }
              }
            >
              <a href="">{dName}</a>
            </li>
          );
        })}
      </ul>
      <h1>{names[currentIndex]}</h1>
      <p>{data.destinations[currentIndex].description}</p>
      <hr />
      <article>
        <h4>AVG. DISTANCE</h4>
      </article>
    </main>
  );
}
