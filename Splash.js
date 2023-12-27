// Home.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

const Home = ({ navigation }) => {
  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data) before navigating
    const fetchData = async () => {
      // Simulate a delay (e.g., 2000 milliseconds)
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Navigate to the main screen (replace 'MainScreen' with your actual main screen)
      navigation.replace('Signup');
    };

    fetchData();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../Images/StudentLearnApp.jpg')}
        style={{height:200,width:200}}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Set your splash screen background color
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default Home;