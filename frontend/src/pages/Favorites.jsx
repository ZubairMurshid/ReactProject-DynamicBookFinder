import "../css/Favorites.css";
import { useBookContext } from "../contexts/BookContext";
import BookCard from "../components/BookCard";

function Favorites() {
  const { favorites } = useBookContext();

  if (favorites) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
      <div className="books-grid">
          {favorites.map((book) => (
            <BookCard book={book} key={book.id} />
          ))}
        </div>      
    </div>
    )
  }
  return (
    <div className="favorites-empty">
      <h2>No favorite books yet</h2>
      <p>Start adding books to your favorites and they would appear here...</p>
    </div>
  );
}

export default Favorites;
