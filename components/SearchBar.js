import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search movies..."
        value={searchTerm}
        onChangeText={onSearch}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10 },
  input: { borderColor: '#ccc', borderWidth: 1, padding: 10, borderRadius: 5 },
});

export default SearchBar;
