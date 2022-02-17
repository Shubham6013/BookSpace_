import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import '../App.css';
import Card from './card';
import books from "./books";


class Feed extends React.Component {

    
    state = {
        filter: "",
        data: books 
      };
    
      handleChange = event => {
        this.setState({ filter: event.target.value });
      };
    
      render() {
        const { filter, data } = this.state;


        
        const lowercasedFilter = filter.toLowerCase();
        const filteredData = data.filter(item => {
          return Object.keys(item).some(key =>
            item[key].toLowerCase().includes(lowercasedFilter)
          );
        });
    
        return (
          <div >
              <div class="topnav">
                <a class="active" href="">Bookspace's Best Selling Books.</a>
                {/* <h3>Best Selling Books</h3> */}
                {/* <label>Search</label> */}
                <input type="text" value={filter}  onChange={this.handleChange} placeholder="Search.."/>
                </div>

            {/* <input classname = "search"  placeholder="Search" /> */}
            <div className="wrapper">
            {filteredData.map(noteItem => (
              <div  key={noteItem.id}>
                <div>
                <Card
                    img={noteItem.img}
                    title={noteItem.title}
                    author={noteItem.author}
                    left={noteItem.left}
                    />    
                </div>
              </div>
            ))}
            </div>
            
          </div>
        );
      }
    }
    
  

  
export default Feed;