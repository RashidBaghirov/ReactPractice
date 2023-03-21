import React from "react";

const MovieList = (props)=> {
    // function handleClick(event) {
    //   console.log(event);
    // }
    return (
      <div className="row">
        {props.movies.map((movie) => (


          <div className="col-lg-4" key={movie.id}>
            <div className="card mb-4 shadow-sm">
              <img
                src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                className="card-img-top w-100 "
                alt="Sample movie"
              />
              <div className="card-body">
                <h5 className="card-title">{movie.original_title}</h5>
                <p className="card-text">  {movie.overview.length > 40 ? `${movie.overview.substring(0, 40)}...` : movie.overview}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <button onClick={(event)=> props.delete(movie)}
                    type="button"
                    className="btn btn-md btn-outline-danger"
                  >
                    Delete
                  </button>
                  <h2>
                    <span className="badge badge-info text-primary-emphasis">{movie.vote_average}</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }


export default MovieList;
