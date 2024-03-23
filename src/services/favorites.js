import openBookPage from './singlebook';
import React, { useState, useEffect } from 'react';
import './favorite.css';

const FavoritesPage = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
       const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(storedFavorites);
    }, []);
    const handleRemoveFromFavorites = (workId, event) => {
        event.stopPropagation();
        const updatedFavorites = favorites.filter(favorite => favorite.work_id !== workId);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        setFavorites(updatedFavorites);
        alert('Item has been Removed from Favorites.');
    };
    const handleBookClick = (workId) => {
        openBookPage(workId); 
    };
    return (
        <div className="favorites-page">
            <h1>Favorites</h1>
            <div className="favorites-list">
                {favorites.length > 0 ? (
                    favorites.map((favorite, index) => (
                        <div className='fav-book-container'>
                            
                        <div key={index} className="favorite-book"onClick={() => handleBookClick(favorite.work_id)}>
                             
                        <div className='favcol'>
                            <h3>{favorite.title}</h3>
                            <div className="fav-detail"><strong>Authors:</strong> {favorite.authors.join(', ')}</div>
                            <div className="fav-detail"><strong>Language:</strong> {favorite.language}</div>
                            <div className="fav-detail"><strong>Published:</strong> {favorite.copyright}</div>
                            <div className="fav-detail"><strong>Min Age:</strong> {favorite.min_age}</div>
                            </div>
                            
                            <div className='favcol'>   
                            <button className="delete" onClick={(event) => handleRemoveFromFavorites(favorite.work_id, event)}>Remove</button>

                        </div>
                        </div>
                        </div>
                        
                    ))
                ) : (
                    <p>No favorites added yet.</p>
                )}
            </div>
        </div>
    );
};

export default FavoritesPage;
