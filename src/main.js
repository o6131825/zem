import React from "react";
import Planeta from "./planeta";

import { useDispatch } from "react-redux"; // для установки значения
import { useSelector } from "react-redux"; // для получения значения
import {
    setGoFilm
} from "./store/mySlice";
import Kino from "./kino";




export default function Main() {


    const mygofilm = useSelector((state) => state.my.goFilm);



    return (

        <div>
{
  mygofilm?<Kino />:<Planeta />  
}
            
        </div>

    );
}
