import React from "react";
import Main from "./main";
import { store } from './store/store'
import { Provider } from 'react-redux'

import videobg from "./g1.mp4";


export default function Kino() {






    return (

        <div>
            <div>
                <video className="videoTag" autoPlay muted loop>
                    <source src={videobg} />
                </video>
            </div>
        </div>

    );
}
