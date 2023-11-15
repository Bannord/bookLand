import React from "react";

import "./Main.scss";


import ListOfMovies from "../ListOfMovies/ListOfMovies";
import TermOfUse from "../TermOfUse/TermOfUse";
import ListBooks from "../ListBooks/ListBooks";
import SearchList from "../SearchList/SearchList";
import ListBtn from "../UI/ListBtn/ListBtn";
import TileBtn from "../UI/TileBtn/TileBtn";



const Main = () => {
  const [visible, setVisible] = React.useState(false);

  // хочу по кнопкке орисовывать картинку по другому

  // const [changeView, setChangeView] = React.useState(false)

  // const changeViewer = () => {
  //   setChangeView(changeView)
  // }

  // хочу по клику картинку рисовать

  const handleclikcer = () => {
    setVisible(!visible);
  };

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
          <SearchList />
          <div className="change_view">
            <div className="btn_wrapper">
              <TileBtn />
              <ListBtn />
            </div>
          </div>
        </div>
        <ListBooks />
       
      </div>
    </div>
  );
};

export default Main;
