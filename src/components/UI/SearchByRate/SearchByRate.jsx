import './SearchByRate.scss'

import rateSvg from "../../../assets/rate.svg";

const SearchByRate = () => {
  return (
    <div className="rate_wrapper">
      <img src={rateSvg} alt="#rate" className="img_rate" />
      <span className="rate_text">По рейтингу</span>
    </div>
  );
};

export default SearchByRate;
