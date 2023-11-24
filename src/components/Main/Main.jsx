import React from "react";

import { CSSTransition } from "react-transition-group";
import axios from "axios";

import "./Main.scss";


import ListOfMovies from "../ListOfMovies/ListOfMovies";
import TermOfUse from "../TermOfUse/TermOfUse";
import ListBooks from "../ListBooks/ListBooks";
import SearchList from "../SearchList/SearchList";
import ListBtn from "../UI/ListBtn/ListBtn";
import TileBtn from "../UI/TileBtn/TileBtn";



const Main = () => {
  const [visible, setVisible] = React.useState(false);

  

  const [isTileMode, setIsTileMOde] = React.useState(false)

  const toggleMode = () => {
    if (!isTileMode) {
      setIsTileMOde(!isTileMode);
    }
  };
  const url = '127.0.0.1:8080/api/v1/catalog/books'


  
//   async function Lol() {
//     try {
//       const response = await axios.get(url, {
//           headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
//       })
  
//       console.log(response.data)
      
      
      
//   } catch(e) {
//    alert('вы не авторизованы, пожалуйста войди в ваш аккаунт!')
//   }
  
//  хуйня это все}
 
// console.log(Lol())

  const handleclikcer = () => {
    setVisible(!visible);
    
  };

  return (
    <div className="main_wrapper">
      <div className="left_sidebar">
        <h3 className="sidebar_title" onClick={handleclikcer}>
          Витрина книг
        </h3>
        {/* css animation on open  */}
        <CSSTransition in={visible} timeout={300}
        classNames='my-node' unmountOnExit>
        <ListOfMovies /> 
        </CSSTransition>
        {/* css animation on open   */}
        <TermOfUse />
      </div>
      <div className="rightbar">
        <div className="searchrow_wrapper">
          <SearchList />
          <div className="change_view">
            <div className="btn_wrapper">
              
              <TileBtn tileChange={toggleMode} isTileMode={isTileMode}/>
              <ListBtn listChange={() => setIsTileMOde(false)} isTileMode={isTileMode}/>
            </div>
          </div>
        </div>
        <ListBooks isTileMode={isTileMode} />
       
      </div>
    </div>
  );
};

export default Main;
