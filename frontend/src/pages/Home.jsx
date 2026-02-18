import { useState, useEffect } from "react";
import BookCard from "../components/BookCard";
import { searchBooks, getPopularBooks } from "../services/api";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load initial "popular" books on mount
  useEffect(() => {
    const loadPopularBooks = async () => {
      try {
        const popularBooks = await getPopularBooks();
        setBooks(popularBooks);
      } catch (err) {
        console.log(err);
        setError("Failed to load books...");
      } finally {
        setLoading(false);
      }
    };
    loadPopularBooks();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return; // Don't search for empty strings
    if (loading) return;

    setLoading(true);
    setError(null);

    try {
      const searchResults = await searchBooks(searchQuery);
      setBooks(searchResults);
      setSearchQuery(""); // Clear the input after search
    } catch (err) {
      console.error(err);
      setError("Failed to search books...");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for books..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {/* Show error message if fetch fails */}
      {error && <div className="error-message">{error}</div>}

      {/* Show loading state or the book grid */}
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="books-grid">
          {books.map((book) => (
            <BookCard book={book} key={book.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
