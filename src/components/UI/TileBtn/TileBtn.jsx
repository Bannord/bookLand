import './TileBtn.scss'

import React from "react";

import tileSvg from "../../../assets/tile_svg.svg";

const TileBtn = () => {
    return ( 
        <div className="btn_tile active">
            <img src={tileSvg} alt="#tilebtn" className="tile_img" />
        </div>
     );
}
 
export default TileBtn;