import React from "react";


class SearchBar extends React.Component{

   

    handleFormSubmit=(event)=>{
        event.preventDefault();
    }

  

    render(){
        return(
            <form onSubmit={this.handleFormSubmit} autoComplete='off'>
                    <div className="form-row my-3">
                         <div className="col-12"> 
                         <input 
                         onChange={this.props.SearchMovie} 
                         type="text"
                          className="form-control" 
                          placeholder="Search Movie" 
                       />
                         </div>
                    </div>
            </form>
        )
    }
}

export default SearchBar;