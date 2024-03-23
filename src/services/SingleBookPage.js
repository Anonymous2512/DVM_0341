import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getBooks from './bookAPI';
import './SingleBookPage.css';
import BookImage from '../images/image1.png';
const SingleBookPage = () => {
    const { workId } = useParams();
 
    const [book, setBook] = useState(null);

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const data = await getBooks();
                const selectedBook = data.results.find(book => book.work_id === workId);
                setBook(selectedBook);
            } catch (error) {
                console.error('Error fetching book:', error);
            }
        };

        fetchBook();
    }, [workId]);
    const handleAddToFavorites = () => {
  
        if (book) {
            const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
            const isAlreadyAdded = favorites.some(favorite => favorite.work_id === book.work_id);
            if (isAlreadyAdded) {
                alert("This book is already in your favorites.");
            } else {
                favorites.push(book);
                localStorage.setItem('favorites', JSON.stringify(favorites));
                alert("Added to Favorites.");
            }
        }
    };
    

    return (
        <div className="single-book-detail">
            {book ? (
                <>
                    <h2>{book.title}</h2>
                    <div className="cols-container">
                    <div className="col-2">
                        <img src={BookImage} alt="Book Cover" className="book-cover" />
                        <button className="add-to-favorites" onClick={handleAddToFavorites}>Add to Favorites</button>
                    </div>
                    <div className="col-2">
                        <div className="book-detail-2"><strong>Authors:</strong> {book.authors.join(', ')}</div>
                        <div className="book-detail-2"><strong>Language:</strong> {book.language}</div>
                        <div className="book-detail-2"><strong>Published:</strong> {book.published}</div>
                        <div className="book-detail-2"><strong>Min Age:</strong> {book.min_age}</div>
                        <div className="book-detail-2"><strong>Max Age:</strong> {book.max_age}</div>
                        <div className="book-detail-2"><strong>Page Count:</strong> {book.page_count}</div>
                        <div className="book-detail-2"><strong>Series Name:</strong> {book.series_name}</div>
                        <div className="book-detail-2"><strong>Canonical ISBN:</strong> {book.canonical_isbn}</div>
                        <div className="book-detail-2"><strong>Canonical Published Work ID:</strong> {book.canonical_published_work_id}</div>
                    </div>
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
           
        </div>
    );
};

export default SingleBookPage;