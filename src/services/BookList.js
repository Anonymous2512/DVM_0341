import React, { useState, useEffect } from 'react';
import getBooks from './bookAPI';

import { getSuggestions } from './search';
import './BookList.css';
import openBookPage from './singlebook';
const BookList = () => {
    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);

   
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                setLoading(true);
                const data = await getBooks();
                setBooks(data.results);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        fetchBooks(); 
    }, []);

    useEffect(() => {
        if (searchQuery === '') {
            setFilteredBooks(books);
            setSuggestions([]);
        } else {
            const results = getSuggestions(books, searchQuery);
            setFilteredBooks(results);
            setSuggestions(results.slice(0, 5)); 
        }
    }, [searchQuery, books]);

    const handleSearch = (query) => {
        setSearchQuery(query);
    };
    const handleSuggestionClick = (workId) => {
        openBookPage(workId); 
    };
    const handleOpenFavoritesPage = () => {
        window.location.href = '/favorites'; 
    };
    
    
    return (
        <div className="app">
            <h1>Book List</h1>
            <button className="favorites-button" onClick={handleOpenFavoritesPage}>Favorites</button>

            <input
                className='search-bar'
                type="text"
                placeholder="Search Books"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
            />
            {suggestions.length > 0 && (
                <ul className="suggestions">
                    {suggestions.map((book) => (
                        <li key={book.work_id}>
                            <a href={`/${book.work_id}`} onClick={() => handleSuggestionClick(book.work_id)}>
                                {book.title}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="book-list">
                    {filteredBooks.length > 0 ? (
                        filteredBooks.map((book) => (
                            <div key={book.work_id} className="book-container" onClick={() => handleSuggestionClick(book.work_id)}>
                                <div className="book-details">
                                    <div className="detail"><strong>Title:</strong> {book.title}</div>
                                    <div className="detail"><strong>Authors:</strong> {book.authors.join(', ')}</div>
                                    <div className="detail">
                                    <strong>Language:</strong> {book.language}
                                </div>
                                <div className="detail">
                                    <strong>Published:</strong> {book.copyright}
                                </div>
                                <div className="detail">
                                    <strong>Min Age:</strong> {book.min_age}
                                </div>
                                    
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No matching books found.Please Refresh</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default BookList;
