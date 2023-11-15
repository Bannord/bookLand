import React from "react";

import SearchByName from "../UI/SearchByName/SearchByName";
import SearchByRate from "../UI/SearchByRate/SearchByRate";

const SearchList = () => {
    return ( 
        <div className="searchbar_wrapper">
            <SearchByName />
            <SearchByRate />
          </div>
     );
}
 
export default SearchList;