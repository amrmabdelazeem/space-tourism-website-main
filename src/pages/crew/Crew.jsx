import "./crew.scss";
import data from "../../data.json";
import { useState } from "react";

export default function Crew() {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <main className="crew">
      <div className="bg-moon-container"></div>
      <header>
        <span>02</span>
        <h5>Meet your crew</h5>
      </header>
      <section className="main-content">
        <section className="crew-photo">
          <img src={data.crew[currentIndex].images.webp} alt="crew" />
        </section>
        <section className="crew-info">
          <div className="slider-dots">
            {data.crew.map((member, index) => {
              return (
                <span
                  className="slider-dot"
                  key={member.name}
                  onClick={() => {
                    setCurrentIndex(index);
                  }}
                  style={
                    currentIndex === index
                      ? { backgroundColor: "#ffffff" }
                      : { backgroundColor: "#97979750" }
                  }
                ></span>
              );
            })}
          </div>
          <h3> {data.crew[currentIndex].role}</h3>
          <h4>{data.crew[currentIndex].name}</h4>
          <p>{data.crew[currentIndex].bio}</p>
        </section>
      </section>
    </main>
  );
}
