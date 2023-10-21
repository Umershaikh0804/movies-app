export const updateText = (newText) =>{
    return{
          type:"UPDATE_TEXT",
          payload: newText,
        };     
};


export const updateNumber = (newNumber) =>{
    return{
          type:"UPDATE_NUMBER",
          payload: newNumber,
        };     
};

export const shortlistMovie = (movieDetail) =>{
  return{
         type:"SHORTLIST_MOVIE",
         payload:movieDetail,
  };
};

export const movieDetails = (moviesDetail) =>{
  return{
         type:"MOVIE_DETAILS",
         payload:moviesDetail,
  };
};