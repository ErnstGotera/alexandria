import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Searchbar } from 'react-native-paper';

const HomeScreen = () => {
    const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);
  
  return (
    <View style={styles.container}>
       <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
      <Text>{searchQuery}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
});

export default HomeScreen;