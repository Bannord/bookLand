import './ListBtn.scss'
import React from "react";

import listIcon from "../../../assets/listicon.svg";

const ListBtn = () => {


    return ( 
        <div className="btn_list">
            <img src={listIcon} alt="#listIcon" className="list_img" />
        </div>
     );
}
 
export default ListBtn;