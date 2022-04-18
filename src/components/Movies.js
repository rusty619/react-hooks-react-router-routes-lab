import React from "react";
import { movies } from "../data";

function Movies() {
  return (
   <div>
    <h1>Movie Page</h1>
    {
      movies.map((element) => {
        return(
         <div>
           <h1>Name: {element.title}</h1>
            <p>Time: {element.time}</p>
            <p>Genres: </p>
            <ul>
              {
                element.genres.map((genre) => {
                  return(<li>{genre}</li>)
                })
              }
            </ul>
         </div>
         )
      })
    }
   </div>
   );
}

export default Movies;
