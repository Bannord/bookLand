import './ListBtn.scss'
import React from "react";

import listIcon from "../../../assets/listicon.svg";

const ListBtn = ({listChange, isTileMode}) => {

    const btnActive = isTileMode ? 'btn_list ' : 'btn_list active'


    return ( 
        <div className={btnActive} onClick={listChange}>
            <img src={listIcon} alt="#listIcon" className="list_img" />
        </div>
     );
}
 
export default ListBtn;