const API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;
const BASE_URL = "https://www.googleapis.com/books/v1";

/**
 * Fetches "popular" books by searching for a general high-rated category.
 */
export const getPopularBooks = async () => {
  try {
    // We use a general query like 'subject:fiction' and order by 'relevance'
    // to simulate a "popular" list.
    const response = await fetch(
      `${BASE_URL}/volumes?q=subject:fiction&orderBy=relevance&maxResults=10&key=${API_KEY}`,
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch popular books: ${response.statusText}`);
    }
    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error("Error fetching popular books:", error);
    throw error;
  }
};

/**
 * Searches for books based on a user-provided query string.
 */
export const searchBooks = async (query) => {
  try {
    const response = await fetch(
      `${BASE_URL}/volumes?q=${encodeURIComponent(query)}&maxResults=20&key=${API_KEY}`,
    );
    if (!response.ok) {
      throw new Error(`Failed to search books: ${response.statusText}`);
    }
    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error("Error searching books:", error);
    throw error;
  }
};
