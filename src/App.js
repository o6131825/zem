import React, { useState } from "react";
import frame14 from "./img/frame14.png";
import frame15_1 from "./img/frame15_1.png";
import frame15_2 from "./img/frame15_2.png";
import "./App.css";
import Globe from "react-globe.gl";
import videobg from "./videoplayback.mp4";
const N = 1000;
const arcsData = [...Array(N).keys()].map(() => ({
  startLat: (Math.random() - 0.5) * 180,
  startLng: (Math.random() - 0.5) * 360,
  endLat: (Math.random() - 0.5) * 180,
  endLng: (Math.random() - 0.5) * 360,
  color: [
    // ["#B43632", "#EEB649", "#CCD556"][Math.round(Math.random() * 3)],
    // ["#B43632", "#EEB649", "#CCD556"][Math.round(Math.random() * 3)],
  ],
}));

export default function App() {
  const globeElement = React.useRef();
  const [size, setSize] = React.useState([0, 0]);
  const [active, setActive] = useState(false);
  const [rotateSpeed, setRotateSpeed] = useState(1);
  const [myLat, setMyLat] = useState(53);
  const [myLng, setMyLng] = useState(-20);
  const [myAltitude, setMyAltitude] = useState(2);
  const [myautoRotate, setautoRotate] = useState(false);
  const [goFilm, setgoFilm] = useState(false);

  React.useEffect(() => {
    // Auto-rotate
    globeElement.current.controls().autoRotate = myautoRotate;
    globeElement.current.controls().autoRotateSpeed = rotateSpeed;
    globeElement.current.controls().enableZoom = true;
    globeElement.current.pointOfView({
      lat: myLat,
      lng: myLng,
      altitude: myAltitude,
    });
  });

  React.useLayoutEffect(() => {
    setSize([window.innerWidth, window.innerHeight]);
  }, []);

  if (
    active === true &&
    // && rotateSpeed >= 0.1
    myAltitude !== 1 &&
    myAltitude > 0.5
  ) {
    // setRotateSpeed(0);
    setTimeout(() => {
      setRotateSpeed((prev) => 0);
      setMyAltitude((prev) => (prev * 100 - 1) / 100);
      setMyLng((prev) => (prev * 100 + 20) / 100);
    }, 40);
  }

  if (active && myAltitude < 0.5) {
    // setRotateSpeed(0);
    setTimeout(() => {
      setgoFilm(true);
    }, 3000);
  }

  if (goFilm) {
    return (
      <div>
        <video className="videoTag" autoPlay muted loop>
          <source src={videobg} />
        </video>
      </div>
    );
  }

  return (
    <div
      className="App"
      style={{
        background: "#ffffff",
        position: "relative",
      }}
    >
      {/* {myAltitude} */}
      <div>
        <Globe
          width={size[0]}
          height={size[1]}
          waitForGlobeReady={true}
          globeImageUrl="/planeta.jpg"
          backgroundImageUrl="/rectangle5.png"
          arcColor={"color"}
          arcDashLength={() => Math.random()}
          arcDashGap={() => Math.random()}
          arcStroke={0.3}
          animateIn={false}
          ref={globeElement}
          enablePointerInteraction={true}
          // markers={markers}
        />
      </div>
      <div className={active ? "m12" : "m1"}>
        <img
          width="965px"
          src={frame14}
          onClick={() => {
            setActive(true);
          }}
        />
      </div>
      <div className={active ? "m22" : "m2"}>
        <img width="400px" src={frame15_1} />
      </div>
      <div className={active ? "m32" : "m3"}>
        <img width="400px" src={frame15_2} />
      </div>
      <div className={active && myAltitude < 0.5 ? "m4" : "m42"}>
        <h2>Фирмочка</h2>
      </div>
    </div>
  );
}
