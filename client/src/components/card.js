import React from 'react'
import '../App.css';


export default function Card(props){
    const [cnt,setCnt] = React.useState(props.left);

    function dec(){
        if(cnt>0){
            setCnt(cnt-1);
        }
        
    }
    return (
        <div className = "card">
            <div className = "card_body">
                <img className="class-img" src = {props.img}/>
                <h2 className="class_title">{props.title}</h2>
                <p className="author_name">by {props.author}</p>
                <div class="row">
                    <div class="column">
                        <button onClick={dec} className="class_btn">Add</button>
                    </div>
                    <div class="column">
                    <button className="counter-btn">{cnt} LEFT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

