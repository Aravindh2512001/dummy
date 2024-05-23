import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./Components/ProductList";
import Main from "./Components/Main";
import ProductCard from "./Components/ProductCard"; // Import ProductCard component
import store from "./Redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Main />}>
              <Route index element={<ProductList />} />
              <Route path="card" element={<ProductCard />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
