import Home from "./components/HomePage";
import Login from "./components/login";
import Register from "./components/register/register";
import Models from "./components/Models";
import ModelItem from "./components/ModelItems";
import Item from "./components/Items";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Modellar/" element={<Models />}>
          <Route path=":modelType" element={<ModelItem />} />
        </Route>
        <Route path="/Modellar/ChevroletTurlari" element={<ModelItem />} />
        <Route path="/Modellar/ChevroletTurlari/Malibu" element={<Item />} />
      </Routes>
    </Router>
  );
}

export default App;
