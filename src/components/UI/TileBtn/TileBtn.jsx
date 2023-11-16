import './TileBtn.scss'

import React from "react";

import tileSvg from "../../../assets/tile_svg.svg";

const TileBtn = ({tileChange, isTileMode}) => {

    const btnActive = isTileMode ? 'btn_tile active': 'btn_tile ' 
    return ( 
        <div className={btnActive} onClick={tileChange}>
            <img src={tileSvg} alt="#tilebtn" className="tile_img" />
        </div>
     );
}
 
export default TileBtn;