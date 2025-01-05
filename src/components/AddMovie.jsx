import React, { useRef, useEffect } from "react";
//import { useRef } from "react";
const AddMovie = () => {
  let movieNameref = useRef(null);
  // let dirName = useRef(null);
  // let proName = useRef(null);
  // let relDate = useRef(null);
  useEffect(() => {
    movieNameref.current.focus();
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    console.log(movieNameref.current.value);
  };
  return (
    <div className="addMovieContainer">
      <p className="movieFormHeader">Please Add the New Movie :</p>
      <form className="movieFormBody" onSubmit={handleSubmit}>
        <label htmlFor="movieName">Movie Name:</label>
        <br />
        <input type="text" id="movieName" ref={movieNameref} name="movieName" />
        <br />
        <label htmlFor="dirName">Directed by:</label>
        <br />
        <input type="text" id="dirName" name="dirName" />
        <br />
        <label htmlFor="proName">Produced by:</label>
        <br />
        <input type="text" id="proName" name="proName" />
        <br />
        <label htmlFor="relDate">Release date:</label>
        <br />
        <input type="date" id="relDate" name="relDate" />
        <br />
        <p>Need to add the image uploader</p>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddMovie;
