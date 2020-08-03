import React, { useEffect,  } from "react";
import Video from "./Video";
import video1 from "./videos/1.mp4";
import video2 from "./videos/2.mp4";
import video3 from "./videos/3.mp4";
import "./App.css";

function App() {
  const observer = () => {
    let lazyloadvideos = document.querySelectorAll("video");
    let options = {
      root: document.querySelector(".app"),
      rootMargin: "0px",
      threshold: 1
    };
    let videoObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          let video = entry.target;
          video.play();
          // videoObserver.unobserve(video);
          console.log(video);
        } else {
          let video = entry.target;
          video.pause();
        }
      });
    }, options);
    lazyloadvideos.forEach(function (video) {
      videoObserver.observe(video);
    });
  };
  useEffect(() => {
    observer();
  }, []);

  return (
    // BEM
    <div className="app">
      <div className="app__videos">
        <Video
          className="video_com"
          url={video1}
          channel={"ashish chanchlani"}
          song={"vines"}
          likes={123}
          messages={131}
          description={"this is demo video"}
          shares={111}
        />
        <Video
          className="video_com"
          url={video2}
          channel={"ashish chanchlani"}
          song={"vines"}
          likes={150}
          messages={50}
          description={"this is demo video 2"}
          shares={222}
        />
        <Video
          className="video_com"
          url={video3}
          channel={"bb ki vines"}
          song={"vines"}
          likes={150}
          messages={50}
          description={"this is demo video 2"}
          shares={222}
        />
      </div>
    </div>
  );
}

export default App;
