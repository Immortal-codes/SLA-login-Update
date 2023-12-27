import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const UserProfile = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../Images/StudentLearnApp.jpg')}
        style={styles.avatar}
      />
      <Text style={styles.username}>John Doe</Text>
      <Text style={styles.bio}>Software Developer</Text>
      <Text style={styles.additionalInfo}>Location: New York</Text>
      {/* Add more user information as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bio: {
    fontSize: 18,
    marginBottom: 10,
    color: 'gray',
  },
  additionalInfo: {
    fontSize: 16,
    color: 'blue',
  },
});

export default UserProfile;
