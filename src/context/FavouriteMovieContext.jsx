import { useState, createContext } from "react";

export const FavouriteMovieContext = createContext();

const FavouriteMovieProvider = ({ children }) => {
  const [watchList, updateWatchList] = useState([]);
  return (
    <FavouriteMovieContext.Provider value={{ watchList, updateWatchList }}>
      {children}
    </FavouriteMovieContext.Provider>
  );
};
export default FavouriteMovieProvider;
