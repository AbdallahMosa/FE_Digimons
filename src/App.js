import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

import MyDigimons from "./components/MyDigimons /MyDigimons ";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/MyDigimons" element={<MyDigimons />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
