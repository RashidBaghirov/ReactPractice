import React from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import axios from "axios";


class App extends React.Component{
state={
    movies:[],
    
    searchQuery:" "
}

// async componentDidMount(){
//     const baseURl="http://localhost:3000/movies"
//     const response= await fetch(baseURl);
//     const data=await response.json();
//     this.setState({movies:data})
// }

async componentDidMount(){
    const response=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=42f0f52044ccdb0f4358249ea9cd7037&language=en-US&page=1`)
    this.setState({movies:response.data.results})
}

 deleteMovies =async (movie) =>{

    const baseURl=`http://localhost:3000/movies/${movie.id}`
    await fetch(baseURl,{
        method:"DELETE"
    })

    const newList=this.state.movies.filter(x=> x.id !== movie.id);

    this.setState({
        movies:newList
    })
}

searchmovieprops=(event)=>{
    console.log(event.target.value);
    // this.setState.searchQuery=event.target.value
    this.setState({searchQuery: event.target.value })
}

    render(){

        let filtersMovies=this.state.movies.filter(
            (movie) =>  {
            return movie.original_title.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
        }
        )
        return(
           <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SearchBar SearchMovie={this.searchmovieprops} />
                    </div>
                    <MovieList 
                    movies={filtersMovies}
                    delete={this.deleteMovies}/>
                </div>
           </div>
        )
    }
}


export default App;