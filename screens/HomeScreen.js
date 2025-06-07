import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import { fetchMoviesByTitle } from '../utils/api';

const HomeScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const searchMovies = async (term, newPage = 1) => {
    setLoading(true);
    const data = await fetchMoviesByTitle(term, newPage);
    if (data.Search) {
      setMovies(newPage === 1 ? data.Search : [...movies, ...data.Search]);
      setPage(newPage);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (searchTerm) searchMovies(searchTerm);
  }, [searchTerm]);

  return (
    <View style={{ flex: 1 }}>
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      <FlatList
        data={movies}
        keyExtractor={(item) => item.imdbID}
        renderItem={({ item }) => (
          <MovieCard
            movie={item}
            onPress={() => navigation.navigate('Details', { id: item.imdbID })}
          />
        )}
        onEndReached={() => searchMovies(searchTerm, page + 1)}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loading ? <ActivityIndicator size="large" /> : null}
      />
    </View>
  );
};

export default HomeScreen;
