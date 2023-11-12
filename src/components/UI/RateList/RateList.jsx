import { FaStar } from "react-icons/fa";

import './RateList.scss'

const RateList = () => {
    return ( 
        //  тут пофикси потом 
        <div className="rate_book">
        {Array(5)
        .fill()
        .map((el, index) => (
            
          <FaStar className="dd"
          
            color="orange"
           key={index} 
           filled={false} />
        ))}
        {/* тут пофикси потом */}
        </div>
     );
}
 
export default RateList;