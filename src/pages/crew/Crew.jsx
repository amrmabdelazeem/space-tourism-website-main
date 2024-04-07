import "./crew.scss";
import data from "../../data.json";

export default function Crew() {
  return (
    <main className="crew">
      <header>
        <span>02</span>
        <h5>Pick your crew</h5>
      </header>
      <article className="crew-photo">
        <img src="assets/crew/image-douglas-hurley.png" alt="crew" />
      </article>
      <article className="crew-info">
        <div className="slider-dots">
          <span></span>
          <span></span>
          <span></span>
          <span></span>

        </div>
        <h3>Commander</h3>
        <h4>Douglas Hurley</h4>
        <p>
          Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA
          astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.
        </p>
      </article>
    </main>
  );
}
