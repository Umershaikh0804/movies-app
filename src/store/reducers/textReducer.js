const initialState = {
    text : "Old Text",
    number : 0,
    shortlisted_movies:[],
    movie_details:[],
}

const textReducer = (state= initialState,action) =>{
      switch(action.type){
              case 'UPDATE_TEXT' : 
              return {...state,text:action.payload};
              case 'UPDATE_NUMBER' : 
              return {...state,number:action.payload};
              case 'SHORTLIST_MOVIE' :
              const newData=[...state.shortlisted_movies,action.payload];
              return {...state,shortlisted_movies:newData}; 
              case 'MOVIE_DETAILS' :
              const newInfo=[...state.movie_details,action.payload];
              return {state,movie_details:newInfo}; 
              default:
              return state;
      }
}

export default textReducer;