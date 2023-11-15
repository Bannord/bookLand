import React from 'react';
import './ListBooks.scss';
import axios from 'axios';

import CardItem from '../CardItem/CardItem';
import { useEffect } from 'react';



const ListBooks = () => {
    const [allBooks, setAllBooks] = React.useState([])

    useEffect(() => {
        const apiUrl = 'https://6550c2b67d203ab6626e1f13.mockapi.io/books'
        axios.get(apiUrl).then((response) => {
            setAllBooks(response.data)
        })

    }, [])
    return ( 
        <div className="book_list_wrapper">
            {allBooks.map((book) => {
                return <CardItem book={book} key={book.id}/>
            })}
        
        
        
       
        </div>
     );
}
 
export default ListBooks;