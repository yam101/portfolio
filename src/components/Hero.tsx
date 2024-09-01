import "../styles/Hero.css";
import aura from "../assets/aura.png";

function Hero() {
  return (
    <>
      <div className="hero-container">
        <div className="foreground"></div>
        <img src={aura} className="aura" />

        <div className="text-container">
          <h1>Yasmin</h1>
          <p>Software Engineering Student</p>

          <div className="icon-container">
            <a href="https://github.com/yam101">
              <i className="bx bxl-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/yasminmotahhary/">
              <i className="bx bxl-linkedin"></i>
            </a>
            <a href="mailto:ymotahhary@uwaterloo.ca">
              <i className="bx bx-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Hero;
