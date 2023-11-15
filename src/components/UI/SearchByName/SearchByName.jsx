import './SearchByName.scss'

import loupSvg from "../../../assets/loop.svg";

const SearchByName = () => {
    return ( 
        <div className="search_by_name">
              <img src={loupSvg} alt="#loup" className="img_search" />
              <input
                type="text"
                placeholder="Поиск книги или автора..."
                className="input_search_bar"
              />
            </div>
     );
}
 
export default SearchByName;