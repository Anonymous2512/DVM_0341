import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './services/HomePage';
import BookList from './services/BookList';
import SingleBookPage from './services/SingleBookPage';
import Favorites from './services/favorites';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/DVM_0341/" element={<HomePage />} />
        <Route path="/booklist" element={<BookList />} />
        <Route path="/:workId" element={<SingleBookPage />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
};

export default App;
