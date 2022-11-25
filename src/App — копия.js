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
    ["#B43632", "#EEB649", "#CCD556"][Math.round(Math.random() * 3)],
    ["#B43632", "#EEB649", "#CCD556"][Math.round(Math.random() * 3)],
  ],
}));

export default function App() {
  const globeElement = React.useRef();
  const [size, setSize] = React.useState([0, 0]);
  const [rotateSpeed, setRotateSpeed] = useState(0);

  React.useEffect(() => {
    // Auto-rotate
    globeElement.current.controls().autoRotate = true;
    globeElement.current.controls().autoRotateSpeed = rotateSpeed;
    globeElement.current.controls().enableZoom = true;
  }, [rotateSpeed]);

  React.useLayoutEffect(() => {
    setSize([window.innerWidth, window.innerHeight]);
  }, []);

  const markers = [
    {
      id: "marker1",
      city: "Singapore",
      color: "red",
      coordinates: [1.3521, 103.8198],
      value: 50,
    },
  ];

  return (
    <div
      className="App"
      style={{
        background: "#ffffff",
        position: "relative",
      }}
    >
      <div
        style={
          {
            // transform: "translate(0%, 0%)",
            // pointerEvents: "none",
          }
        }
      >
        <Globe
          width={size[0]}
          height={size[1]}
          waitForGlobeReady={false}
          globeImageUrl="/planeta.jpg"
          backgroundImageUrl="/rectangle5.png"
          arcsData={arcsData}
          arcColor={"color"}
          arcDashLength={() => Math.random()}
          arcDashGap={() => Math.random()}
          arcStroke={0.0}
          animateIn={false}
          arcDashAnimateTime={10000}
          ref={globeElement}
          enablePointerInteraction={false}
          // markers={markers}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "38%",
          left: 576,
          //left: "2%",
        }}
      >
        <img
          width="806px"
          // width="43%"
          src={frame14}
          onClick={() => {
            setRotateSpeed(2);
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
