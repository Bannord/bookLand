import './CardItem.scss'
import RateList from '../UI/RateList/RateList';


const CardItem = ({book}) => {
    return ( 
        <div className="card_wrapper">
            <div className="img_wrapper">
              <img src={book.image} alt="#book" />
            </div>
            <RateList />

            <h3 className="title_book">{book.name}</h3>
            <div className="author_wrapper">
              <span className="author_name">{book.author}, </span>
              <span className="year_book">{book.age}</span>
            </div>
            <button className="added_book">Забронировать</button>
          </div>
     );
}
 
export default CardItem;