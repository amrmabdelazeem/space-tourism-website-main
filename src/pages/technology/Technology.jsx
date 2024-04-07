import { useState } from "react";
import "./technology.scss";
import data from "../../data.json";

export default function Technology() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <main className="tech">
      <header>
        <span>03</span>
        <h5>SPACE LAUNCH 101</h5>
      </header>
      <section className="img-container">
        <img
          src="assets/technology/image-launch-vehicle-landscape.jpg"
          alt="image-launch-vehicle-landscape"
        />
      </section>
      <section className="img-changer">
      {data.technology.map((tech, index)=>{
        return <span key={tech.name} style={currentIndex === index ? {backgroundColor:'#fff', color:'#0B0D17'} : {backgroundColor:'transparent', color:'#fff'}}>{index+1}</span>
      })}
      </section>
      <section className="terminology-paragraph">
        <h3>THE TERMINOLOGY…</h3>
        <h4>LAUNCH VEHICLE</h4>
        <p>
          A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload
          from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket
          is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring
          sight on the launch pad!
        </p>
      </section>
    </main>
  );
}
