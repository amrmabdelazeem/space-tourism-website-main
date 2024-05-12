import { useEffect, useState } from "react";
import "./technology.scss";
import data from "../../data.json";

export default function Technology() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  console.log(currentIndex);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    //remove eventlistener to avoid memory leaks
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <main className="tech">
      <header>
        <span>03</span>
        <h5>SPACE LAUNCH 101</h5>
      </header>
      <section className="main-content">
        <section className="img-container">
          {screenSize > 1439 ? 
            <img src={data.technology[currentIndex].images.portrait} alt="image-preview" />
            :
            <img src={data.technology[currentIndex].images.landscape} alt="image-preview" />}
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
