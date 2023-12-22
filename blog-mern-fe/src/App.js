import React from "react";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import { Route, Routes } from "react-router-dom";
import ArticleDetailPage from "pages/articleDetail/ArticleDetailPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/blog/:id" element={<ArticleDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
