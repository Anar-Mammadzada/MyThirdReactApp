import React from "react";
import SearchInput from "./SearchInput";
import axios from "axios";
import ImageList from "./imageList";

class App extends React.Component{

    state = {images : []}

     onSearchSubmit = async (entry)=>{
      const response =  await axios.get(`https://pixabay.com/api/?key=42723600-77f1be911abeb57dbc01da9d1&q=${entry}&image_type=photo`)
        this.setState({images : response.data.hits})
    }

    render(){
        return(
            <div className="ui container" style={{marginTop: "30px"}}>
                    <SearchInput onSearchSubmit={this.onSearchSubmit} />
                    <ImageList images = {this.state.images} />
            </div>
        )
    }
}

export default App;