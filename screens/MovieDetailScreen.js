import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, Button, StyleSheet } from 'react-native';
import { fetchMovieDetails } from '../utils/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MovieDetailScreen = ({ route }) => {
  const { id } = route.params;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(id).then(setMovie);
  }, []);

  const saveFavorite = async () => {
    const stored = JSON.parse(await AsyncStorage.getItem('favorites')) || [];
    await AsyncStorage.setItem('favorites', JSON.stringify([...stored, movie]));
    alert('Saved to favorites!');
  };

  if (!movie) return null;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: movie.Poster }} style={styles.poster} />
      <Text style={styles.title}>{movie.Title}</Text>
      <Text>Year: {movie.Year}</Text>
      <Text>Genre: {movie.Genre}</Text>
      <Text>Rating: {movie.imdbRating}</Text>
      <Text>Plot: {movie.Plot}</Text>
      <Button title="Add to Favorites" onPress={saveFavorite} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  poster: { height: 300, resizeMode: 'cover', marginBottom: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
});

export default MovieDetailScreen;
