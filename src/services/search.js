export const searchBooks = (books, query) => {
    return books.filter((book) => {
       
        const title = book.title.toLowerCase();
        const authors = book.authors.map((author) => author.toLowerCase());

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
