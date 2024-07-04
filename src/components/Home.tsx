import "../styles/App.css";
import aura_1 from "../assets/aura-1.png";
import aura_2 from "../assets/aura-2.png";

function Home() {
  return (
    <>
      <div className="home-container">
        <img src={aura_2} className="aura-2" />
        <div className="text-container">
          <p>Hello, my name is</p>
          <h1>Yasmin</h1>
          <p>A Software Engineering student at the University of Waterloo</p>

          <div className="icon-container">
            <a href="https://github.com/yam101">
              <i className="bx bxl-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/yasminmotahhary/">
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
