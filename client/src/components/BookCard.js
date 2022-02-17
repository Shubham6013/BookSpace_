import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Cart from './cart'

const BookCard = (props) => {
    const  book  = props.book;

    const [cnt,setCnt] = React.useState(book.copies);



    function dec(){
        if(cnt>0){
            setCnt(cnt-1);
        }
        
        <Cart
        title = {book.title}
        />
    }




    return(
        <div className="card-container">
            <img src="{book.img}" alt="" />
            <div className="desc">
                <h2>
                    <Link to={`/show-book/${book._id}`}>
                        { book.title }
                    </Link>
                </h2>
                <h3>{book.author}</h3>
                {/* <p> {book.description}</p> */}
                {/* <h3>No. of copies left {book.copies}</h3> */}
                <button onClick={dec}>Add To Card</button> 
                <button>{cnt} LEFT</button>
            </div>
        </div>
    )
};

export default BookCard;