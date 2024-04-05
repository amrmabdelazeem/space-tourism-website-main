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
        <h1>Pick your destination</h1>
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
              <a href="" style={names[currentIndex] !== dName ? { color: "#D0D6F9" } : {color:'#fff'}}>
                {dName}
              </a>
            </li>
          );
        })}
      </ul>
      <h2>{names[currentIndex]}</h2>
      <p>{data.destinations[currentIndex].description}</p>
      <hr />
      <article>
        <span>AVG. DISTANCE</span>
        <h4>{data.destinations[currentIndex].distance}</h4>
      </article>
      <article>
        <span>Est. travel time</span>
        <h4>{data.destinations[currentIndex].travel}</h4>
      </article>
    </main>
  );
}
