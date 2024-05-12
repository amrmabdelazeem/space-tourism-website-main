import "./home.scss";

export default function Home() {
  return (
    <main className="home">
      <section className="home-content">
        <h1>SPACE</h1>
        <h5>SO, YOU WANT TO TRAVEL TO</h5>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space
          and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a
          truly out of this world experience!
        </p>
      </section>
      <div className="btn-container">
        <button className="explore-btn" role="button" tabIndex="1">
          EXPLORE
        </button>
      </div>
    </main>
  );
}
