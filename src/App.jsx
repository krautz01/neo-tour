import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import TourPage from "./pages/TourPage/TourPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/tour/:id" Component={TourPage} />
      </Routes>
    </>
  );
}

export default App;
