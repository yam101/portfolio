import "../styles/Navbar.css";
import { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [activePage, setActivePage] = useState("");
  const [animate, setAnimate] = useState("");

  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark-theme"
      : "light-theme";
  });

  const toggleTheme = () => {
    setTheme(theme === "dark-theme" ? "light-theme" : "dark-theme");
  };

  useEffect(() => {
    if (theme === "dark-theme") {
      document.documentElement.className = "dark-theme";
      localStorage.setItem("theme", "dark-theme");
    } else {
      document.documentElement.className = "light-theme";
      localStorage.setItem("theme", "light-theme");
    }
  }, [theme]);

  const handleClick = (link: string) => {
    setAnimate(link);
  };

  const location = useLocation();
  useEffect(() => {
    const currentPage = location.pathname;
    window.scrollTo(0, 0);
    // console.log(currentPage);

    if (currentPage === "/") {
      setActivePage("home");
    } else if (currentPage.includes("projects")) {
      setActivePage("projects");
    } else if (currentPage.includes("about")) {
      setActivePage("about");
    } else if (currentPage.includes("photos")) {
      setActivePage("photos");
    }
  }, [[location.pathname]]); // Runs when pathname changes

  const dockRef = useRef<HTMLDivElement>(null);

  const scaleValue = (
    value: number,
    from: [number, number],
    to: [number, number]
  ) => {
    const scale = (to[1] - to[0]) / (from[1] - from[0]);
    const capped = Math.min(from[1], Math.max(from[0], value)) - from[0];
    return Math.floor(capped * scale + to[0]);
  };

  const handleAppHover = (event: React.MouseEvent<HTMLLIElement>) => {
    if (!dockRef.current) return;

    const mousePosition = event.clientX;
    const iconPositionLeft = event.currentTarget.getBoundingClientRect().left;
    const iconWidth = event.currentTarget.getBoundingClientRect().width;

    const cursorDistance = (mousePosition - iconPositionLeft) / iconWidth;
    const offsetPixelsDock = scaleValue(cursorDistance, [0, 1], [-5, 5]);
    const offsetPixelsIcon = scaleValue(cursorDistance, [0, 1], [-3, 3]);

    dockRef.current.style.setProperty(
      "--dock-offset-left",
      `${offsetPixelsDock * -1}px`
    );

    dockRef.current.style.setProperty(
      "--dock-offset-right",
      `${offsetPixelsDock}px`
    );

    dockRef.current.style.setProperty(
      "--icon-offset-left",
      `${offsetPixelsIcon * -1}px`
    );

    dockRef.current.style.setProperty(
      "--icon-offset-right",
      `${offsetPixelsIcon}px`
    );

    //console.table({mousePosition, iconPositionLeft, iconWidth, cursorDistance, offsetPixels});
  };

  return (
    <>
      <nav ref={dockRef} className="dock">
        <ul>
          <li
            className={`item ${animate === "home" ? "bounce" : ""}`}
            onMouseMove={handleAppHover}
          >
            <Link className="icon" to="/" onClick={() => handleClick("home")}>
              <i className="bx bxs-home-heart"></i>
            </Link>

            <span className="tooltip">Home</span>
            <div
              className={`indicator ${
                activePage === "home" ? "show" : "hidden"
              }`}
            ></div>
          </li>

          <li
            className={`item ${animate === "about" ? "bounce" : ""}`}
            onMouseMove={handleAppHover}
          >
            <Link
              className="icon"
              to="/about"
              onClick={() => handleClick("about")}
            >
              <i className="bx bxs-info-circle"></i>
            </Link>

            <span className="tooltip">About</span>
            <div
              className={`indicator ${
                activePage === "about" ? "show" : "hidden"
              }`}
            ></div>
          </li>

          <li
            className={`item ${animate === "projects" ? "bounce" : ""}`}
            onMouseMove={handleAppHover}
          >
            <Link
              className="icon"
              to="/projects"
              onClick={() => handleClick("projects")}
            >
              <i className="bx bxs-bulb"></i>
            </Link>

            <span className="tooltip">Projects</span>
            <div
              className={`indicator ${
                activePage === "projects" ? "show" : "hidden"
              }`}
            ></div>
          </li>

          <li
            className={`item ${animate === "photos" ? "bounce" : ""}`}
            onMouseMove={handleAppHover}
          >
            <Link
              className="icon"
              to="/photos"
              onClick={() => handleClick("photos")}
            >
              <i className="bx bxs-camera"></i>
            </Link>

            <span className="tooltip">Photos</span>
            <div
              className={`indicator ${
                activePage === "photos" ? "show" : "hidden"
              }`}
            ></div>
          </li>

          <li className="item" onMouseMove={handleAppHover}>
            <button className="icon" onClick={toggleTheme}>
              {theme === "dark-theme" ? (
                <i className="bx bxs-sun"></i>
              ) : (
                <i className="bx bxs-moon"></i>
              )}
            </button>

            <span className="tooltip">Toggle theme</span>
            <div className="indicator"></div>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
