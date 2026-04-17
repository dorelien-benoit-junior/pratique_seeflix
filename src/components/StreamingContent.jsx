import React, { useState, useEffect } from 'react';
import "./AboutUsContentStyle.css";
import "./StreamingContent.css";
import MediaCard from './MediaCard';
import SearchBar from './SearchBar';

function StreamingContent() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiKey = '02c6bafc73d11518397eb10c3120fab3';
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=1`
        );
        
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données');
        }
        
        const data = await response.json();
        setMovies(data.results || []);
        setFilteredMovies(data.results || []);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredMovies(movies);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = movies.filter((movie) => {
        return (
          movie.title.toLowerCase().includes(query) ||
          movie.overview.toLowerCase().includes(query) ||
          Math.round(movie.vote_average).toString().includes(query)
        );
      });
      setFilteredMovies(filtered);
    }
  }, [searchQuery, movies]);

  if (loading) {
    return <div className='streamingContentWrapper'><p>Chargement des films...</p></div>;
  }

  if (error) {
    return <div className='streamingContentWrapper'><p>Erreur: {error}</p></div>;
  }

  return (
    <main className='streamingContentWrapper'>
      <div>
        <section className="aboutSection">
          <h2>🎬 Films en Tendance</h2>
          <p>Découvrez les meilleurs films du moment sur notre plateforme de streaming.</p>
        </section>

        <SearchBar 
          searchQuery={searchQuery} 
          onSearchChange={setSearchQuery}
          resultCount={filteredMovies.length}
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px', padding: '0 20px', marginBottom: '40px' }}>
          {filteredMovies.map((movie) => (
            <MediaCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              cover={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              rating={movie.vote_average}
              type={movie.overview}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default StreamingContent;
