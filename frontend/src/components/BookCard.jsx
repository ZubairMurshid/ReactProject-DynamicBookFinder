import "../css/BookCard.css"
import { useBookContext } from "../contexts/BookContext";

function BookCard({book}) {
    const {addToFavorites, removeFromFavorites, isFavorite} = useBookContext();
    const isBookFavorite = isFavorite(book.id);

    function onFavoriteClick(e) {
       e.preventDefault();
       if(isBookFavorite) {
           removeFromFavorites(book.id);
       } else {
           addToFavorites(book);
       }
    }

    return (
        <div className="book-card">
            <div className="book-poster">
                <img 
                    src={book.volumeInfo?.imageLinks?.thumbnail || "https://via.placeholder.com/128x192?text=No+Cover"} 
                    alt={book.volumeInfo?.title} 
                />
                <div className="book-overlay">
                    <button className={`favorite-btn ${isBookFavorite ? "active" : ""}`} onClick={onFavoriteClick}>
                        🤍
                    </button>
                </div>
            </div>
            <div className="book-info">
                <h3>{book.volumeInfo?.title}</h3>
                <p>{book.volumeInfo?.authors?.join(", ") || "Unknown Author"}</p>
                <p>{book.volumeInfo?.publishedDate?.split("-")[0]}</p>
            </div>
        </div>
    )
}

export default BookCard