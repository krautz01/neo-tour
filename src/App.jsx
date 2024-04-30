import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import DetailTourPage from "./pages/DetailTourPage/DetailTourPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/tour/:id" Component={DetailTourPage} />
      </Routes>
    </>
  );
}

export default App;
