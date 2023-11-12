import React from "react";

import "./Main.scss";

import loupSvg from "../../assets/loop.svg";
import rateSvg from "../../assets/rate.svg";
import tileSvg from "../../assets/tile_svg.svg";
import listIcon from "../../assets/listicon.svg";
import bookPhoto from "../../assets/bookImg/grokaem.jpg";
import Podsoznanie from "../../assets/bookImg/Podsoznanie.jpg";
import JavaScript from '../../assets/bookImg/JavaScript.jpg'
import MasterPhoto from "../../assets/bookImg/Master.jpg";
import RateList from "../UI/RateList/RateList";
import ListOfMovies from "../ListOfMovies/ListOfMovies";
import TermOfUse from "../TermOfUse/TermOfUse";

const Main = () => {
  const [visible, setVisible] = React.useState(false);

  const handleclikcer = () => {
    setVisible(!visible);
  };

  const url = "https://6550c2b67d203ab6626e1f13.mockapi.io/books";
  let response = fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
  console.log(response);

  return (
    <div className="main_wrapper">
      <div className="left_sidebar">
        <h3 className="sidebar_title" onClick={handleclikcer}>
          Витрина книг
        </h3>
        {visible ? <ListOfMovies /> : null}
        <TermOfUse />
      </div>
      <div className="rightbar">
        <div className="searchrow_wrapper">
          <div className="searchbar_wrapper">
            <div className="searchbar">
              <img src={loupSvg} alt="#loup" className="img_search" />
              <input
                type="text"
                placeholder="Поиск книги или автора..."
                className="input_search_bar"
              />
            </div>
            <div className="rate_wrapper">
              <img src={rateSvg} alt="#rate" className="img_rate" />
              <span className="rate_text">По рейтингу</span>
            </div>
          </div>
          <div className="change_view">
            <div className="btn_wrapper">
              <div className="btn_tile">
                <img src={tileSvg} alt="#tilebtn" className="tile_img" />
              </div>
              <div className="btn_list">
                <img src={listIcon} alt="#listIcon" className="list_img" />
              </div>
            </div>
          </div>
        </div>

        <div className="book_list_wrapper">
          <div className="card_wrapper">
            <div className="img_wrapper">
              <img src={bookPhoto} alt="#book" />
            </div>
            <RateList />

            <h3 className="title_book">Грокаем алгоритмы. илюстрированное</h3>
            <div className="author_wrapper">
              <span className="author_name">Адитья Бхаргова, </span>
              <span className="year_book">2019</span>
            </div>
            <button className="added_book">Забронировать</button>
          </div>
          <div className="card_wrapper">
            <div className="img_wrapper">
              <img src={Podsoznanie} alt="#book" />
            </div>
            <RateList />

            <h3 className="title_book">Подсознание может все</h3>
            <div className="author_wrapper">
              <span className="author_name">Джон кехо, </span>
              <span className="year_book">1979</span>
            </div>
            <button className="added_book">Забронировать</button>
          </div>
          <div className="card_wrapper">
            <div className="img_wrapper">
              <img src={MasterPhoto} alt="#book" />
            </div>
            <RateList />

            <h3 className="title_book">Мастер и Маргарита</h3>
            <div className="author_wrapper">
              <span className="author_name">Михаил Булгаков, </span>
              <span className="year_book">1928</span>
            </div>
            <button className="added_book">Забронировать</button>
          </div>
          <div className="card_wrapper">
            <div className="img_wrapper">
              <img src={JavaScript} alt="#book" />
            </div>
            <RateList />

            <h3 className="title_book">Выразительный JavaScript</h3>
            <div className="author_wrapper">
              <span className="author_name">Марейн Хавербеке, </span>
              <span className="year_book">2022</span>
            </div>
            <button className="added_book">Забронировать</button>
          </div>
          <div className="card_wrapper">
            <div className="img_wrapper">
              <img src={JavaScript} alt="#book" />
            </div>
            <RateList />

            <h3 className="title_book">Грокаем алгоритмы. илюстрированное</h3>
            <div className="author_wrapper">
              <span className="author_name">Адитья Бхаргова, </span>
              <span className="year_book">2019</span>
            </div>
            <button className="added_book">Забронировать</button>
          </div>
          <div className="card_wrapper">
            <div className="img_wrapper">
              <img src={bookPhoto} alt="#book" />
            </div>
            <RateList />

            <h3 className="title_book">Грокаем алгоритмы. илюстрированное</h3>
            <div className="author_wrapper">
              <span className="author_name">Адитья Бхаргова, </span>
              <span className="year_book">2019</span>
            </div>
            <button className="added_book">Забронировать</button>
          </div>
          <div className="card_wrapper">
            <div className="img_wrapper">
              <img src={bookPhoto} alt="#book" />
            </div>
            <RateList />

            <h3 className="title_book">Грокаем алгоритмы. илюстрированное</h3>
            <div className="author_wrapper">
              <span className="author_name">Адитья Бхаргова, </span>
              <span className="year_book">2019</span>
            </div>
            <button className="added_book">Забронировать</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
