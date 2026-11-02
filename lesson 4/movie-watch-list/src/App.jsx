import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");

  function addMovie(e) {
    e.preventDefault();

    if (title.trim() === "") return;

    const newMovie = {
      id: Date.now(),
      title: title.trim(),
      review: "",
      rating: 0,
    };

    setMovies([...movies, newMovie]);
    setTitle("");
  }

  function removeMovie(id) {
    setMovies(movies.filter((movie) => movie.id !== id));
  }

  function updateReview(id, review) {
    setMovies(
      movies.map((movie) =>
        movie.id === id ? { ...movie, review } : movie
      )
    );
  }

  function updateRating(id, rating) {
    setMovies(
      movies.map((movie) =>
        movie.id === id ? { ...movie, rating } : movie
      )
    );
  }

  return (
    <main className="app">
      <h1>🎬 My Movie Watch List</h1>
      <p className="subtitle">Save the movies you watch and rate them.</p>

      <form className="add-form" onSubmit={addMovie}>
        <input
          type="text"
          placeholder="Enter movie name..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add Movie</button>
      </form>

      <h2>My Movies ({movies.length})</h2>

      {movies.length === 0 ? (
        <p className="empty">No movies yet. Add your first movie!</p>
      ) : (
        <div className="movie-list">
          {movies.map((movie) => (
            <div className="movie-card" key={movie.id}>
              <div className="movie-heading">
                <h3>{movie.title}</h3>
                <button
                  className="remove-button"
                  onClick={() => removeMovie(movie.id)}
                >
                  Remove
                </button>
              </div>

              <p className="label">Your rating:</p>
              <div className="rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    className="star-button"
                    key={star}
                    onClick={() => updateRating(movie.id, star)}
                    aria-label={`Rate ${star} out of 5 stars`}
                    type="button"
                  >
                    {star <= movie.rating ? "⭐" : "☆"}
                  </button>
                ))}
                <span>{movie.rating}/5</span>
              </div>

              <label className="label" htmlFor={`review-${movie.id}`}>
                Your review:
              </label>
              <textarea
                id={`review-${movie.id}`}
                placeholder="Write your comment..."
                value={movie.review}
                onChange={(e) => updateReview(movie.id, e.target.value)}
                rows="3"
              />
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default App;
