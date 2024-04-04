import Navbar from "../../components/navbar/NavBar";
import "./home.scss";

export default function Home() {
  return (
    <section>
    <Navbar/>
      <article>
        <h1>SPACE</h1>
        <h5>SO, YOU WANT TO TRAVEL TO</h5>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space
          and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a
          truly out of this world experience!
        </p>
      </article>
      <button className="explore-btn">EXPLORE </button>
    </section>
  );
}
