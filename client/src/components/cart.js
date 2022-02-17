import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';



export default function Cart(props){

    return (
        // <div className = "card">
        //     <div className = "card_body">
        //         <img className="class-img" src = {props.img}/>
                <h2>{props.title}</h2>
        //         <p className="author_name">by {props.author}</p>
        //     </div>
        // </div>
    )
}

