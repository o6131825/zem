import React from "react";
import Main from "./main";
import { store } from "./store/store";
import { Provider } from "react-redux";

//import videobg from "http://localhost:3000/g1.mp4";

export default function Kino() {
  return (
    <div className="videoKino">
      <div>
        <button className="videoBtn" onClick={() => window.location.reload()}>
          ✖
        </button>
      </div>
      <div>
        <video className="videoTag" autoPlay muted loop>
          <source src="/g1.mp4" />
        </video>
      </div>
    </div>
  );
}
