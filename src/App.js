import React, { useState } from "react";
import frame14 from "./img/frame14.png";
import frame15_1 from "./img/frame15_1.png";
import frame15_2 from "./img/frame15_2.png";
import "./App.css";
import Globe from "react-globe.gl";
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
  const [myLng, setMyLng] = useState(1);
  const [myAltitude, setMyAltitude] = useState(2);
  const [myautoRotate, setautoRotate] = useState(false);

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

  // React.useEffect(() => {
  //   // Auto-rotate
  //   globeElement.current.controls().autoRotate = myautoRotate;
  //   globeElement.current.controls().autoRotateSpeed = rotateSpeed;
  //   globeElement.current.controls().enableZoom = true;
  //   globeElement.current.pointOfView({
  //     lat: myLat,
  //     lng: myLng,
  //   });
  // }, [myAltitude]);

  // React.useEffect(() => {}, [myLat]);

  React.useLayoutEffect(() => {
    setSize([window.innerWidth, window.innerHeight]);
  }, []);

  if (
    active === true &&
    // && rotateSpeed >= 0.1
    myAltitude !== 1 &&
    myAltitude > 0
  ) {
    // setRotateSpeed(0);
    setTimeout(() => {
      setRotateSpeed((prev) => 0);
      setMyAltitude((prev) => (prev * 100 - 1) / 100);
      setMyLng((prev) => (prev * 100 + 5) / 100);
    }, 40);
  }

  return (
    <div
      className="App"
      style={{
        background: "#ffffff",
        position: "relative",
      }}
    >
      {}
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
      <div
        style={{
          position: "absolute",
          top: "38%",
          left: 505,
          //left: "2%",
        }}
      >
        <img
          width="965px"
          //lat: 53.55, lng: 27.33
          src={frame14}
          onClick={() => {
            setActive(true);
            // setMyLat(53.55);
            // setMyLng(27.33);
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: 10,
          left: 10,

          fontSize: "70px",
          color: "#fff",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img width="400px" src={frame15_1} />
      </div>
      <div
        style={{
          position: "absolute",
          top: 10,
          right: 10,

          fontSize: "70px",
          color: "#fff",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img width="400px" src={frame15_2} />
      </div>
    </div>
  );
}
