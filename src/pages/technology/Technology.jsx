import { useState } from "react";
import "./technology.scss";
import data from "../../data.json";

export default function Technology() {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(currentIndex);
  console.log(screen.width);

  return (
    <main className="tech">
      <header>
        <span>03</span>
        <h5>SPACE LAUNCH 101</h5>
      </header>
      <section className="main-content">
      <section className="img-container">
            <img src={data.technology[currentIndex].images.portrait} alt="image-preview" />
          </section>
        <section className="img-changer">
          {data.technology.map((tech, index) => {
            return (
              <span
                key={tech.name}
                style={
                  currentIndex === index
                    ? { backgroundColor: "#fff", color: "#0B0D17" }
                    : { backgroundColor: "transparent", color: "#fff" }
                }
                onClick={() => {
                  setCurrentIndex(index);
                  console.log("inside: " + currentIndex);
                }}
              >
                {index + 1}
              </span>
            );
          })}
        </section>
        <section className="terminology-paragraph">
          <h3>THE TERMINOLOGY…</h3>
          <h4>{data.technology[currentIndex].name}</h4>
          <p>{data.technology[currentIndex].description}</p>
        </section>
      </section>
    </main>
  );
}
