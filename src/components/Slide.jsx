import { useState, useEffect, useRef } from "react";
import cinemaWeb from "../assets/images/moviesWebsite.png";
import ecommerce from "../assets/images/ecommerce.png";
import code from "../assets/images/code.png";
import appointment from "../assets/images/appointmentSite.png";
import weather from "../assets/images/weatherApp.png";
import calculator from "../assets/images/calculator.png";
import markd from "../assets/images/markdPrev.png";

const projects = [
  {
    img: cinemaWeb,
    link: "https://github.com/rociogirardini/moviesWebsite",
    title: "Movies website with Login",
  },
  {
    img: ecommerce,
    link: "https://github.com/rociogirardini/ecommerce",
    title: "eCommerce",
  },
  {
    img: code,
    link: "https://github.com/rociogirardini/restserver-node",
    title: "REST Server built in Node.js",
  },
  {
    img: appointment,
    link: "https://github.com/rociogirardini/turnero",
    title: "Appointment site",
  },
  {
    img: weather,
    link: "https://github.com/rociogirardini/weather_app",
    title: "Weather app with geolocalization",
  },
  {
    img: calculator,
    link: "https://github.com/rociogirardini/calculator",
    title: "Calculator",
  },
  {
    img: markd,
    link: "https://github.com/rociogirardini/markdown-previewer",
    title: "Markdown previewer",
  },
];
const delay = 2500;

function Slide() {
  const [index, setIndex] = useState(0);
  const isMobile = window.innerWidth <= 730
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: !isMobile ? `translate3d(${-index * 100 / 2}%, 0, 0)` : `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {projects.map((repo, idx) => (
          <a href={repo.link} target="_blank" rel="noreferrer" key={idx}>
            <div
              className="slide"
              key={idx}
              style={{
                backgroundImage: `url(${repo.img})`,
                backgroundPosition: "center center",
              }}
            >
              {" "}
              <p className="text-center bg-black pb-2 rounded-t-lg">
                {repo.title}
              </p>{" "}
            </div>
          </a>
        ))}
      </div>

      <div className="slideshowDots">
        {projects.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slide;
