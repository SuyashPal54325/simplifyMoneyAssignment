import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const MovieCard = ({ movie, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image source={{ uri: movie.Poster }} style={styles.image} />
      <Text style={styles.title}>{movie.Title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: { flexDirection: 'row', padding: 10, alignItems: 'center' },
  image: { width: 50, height: 75, marginRight: 10 },
  title: { fontSize: 16, flex: 1 },
});

export default MovieCard;
