// services/search.js

// Function to filter books based on the search query
export const searchBooks = (books, query) => {
    return books.filter((book) => {
        // Convert title and authors to lowercase for case-insensitive search
        const title = book.title.toLowerCase();
        const authors = book.authors.map((author) => author.toLowerCase());

        // Check if the title or any author contains the search query
        return title.includes(query.toLowerCase()) || authors.some((author) => author.includes(query.toLowerCase()));
    });
};
export const getSuggestions = (books, query) => {
    if (!query) {
        return [];
    }
    
    const normalizedQuery = query.toLowerCase();
    return books.filter((book) =>
        book.title.toLowerCase().includes(normalizedQuery) ||
        book.authors.some(author => author.toLowerCase().includes(normalizedQuery))
    );
};
