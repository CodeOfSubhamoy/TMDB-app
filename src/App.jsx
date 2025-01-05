import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Details from "./components/Details";
import WatchList from "./components/WatchList";
import "./App.css";
import { Routes, Route } from "react-router";
// import AddMovie from "./components/AddMovie";
import Test from "./components/test";
function App() {
  return (
    <>
      <div className="container-fluid">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/watchlist" element={<WatchList />} />
          {/* <Route path="/addMovie" element={<AddMovie />} /> */}
          <Route path="test" element={<Test />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
