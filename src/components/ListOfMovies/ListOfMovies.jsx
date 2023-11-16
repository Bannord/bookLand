import './ListOfMovies.scss'

const ListOfMovies = () => {

  
    return ( 
        <ul className="book_title_list">
          <li className="title_book activee">Все книги </li>
          <li className="title_book">
            Бизнес-книги <span className="cost_item">14</span>
          </li>
          <li className="title_book">
            Детективы <span className="cost_item">8</span>
          </li>
          <li className="title_book">
            Детские книги <span className="cost_item">10</span>
          </li>
          <li className="title_book">
            Зарубежная литература <span className="cost_item">2</span>
          </li>
          <li className="title_book">
            История <span className="cost_item"></span>5
          </li>
          <li className="title_book">
            Классическая литература <span className="cost_item">12</span>
          </li>
          <li className="title_book">
            Книги по психологии <span className="cost_item">11</span>
          </li>
          <li className="title_book">
            Компьютерная литература <span className="cost_item">54</span>
          </li>
          <li className="title_book">
            Культура и искусство <span className="cost_item">0</span>
          </li>
          <li className="title_book">
            Наука и образование <span className="cost_item">2</span>
          </li>
          <li className="title_book">
            Публицистическая литература <span className="cost_item">0</span>
          </li>
          <li className="title_book">
            Справочники <span className="cost_item">10</span>
          </li>
          <li className="title_book">
            Фантастика <span className="cost_item">12</span>
          </li>
          <li className="title_book">
            Юмористическая литература <span className="cost_item">8</span>
          </li>
        </ul>
     );
}
 
export default ListOfMovies;