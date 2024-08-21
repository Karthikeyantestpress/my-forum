import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function WelcomeScreen() {
   const navigation = useNavigation(); 
  return (
    <View style={styles.container}>
      <Image source={require('../assets/welcome.png')} style={styles.image} />

  <View style={styles.textContainer}>
  <Text style={styles.title}>Welcome to my forum</Text>
  <Text style={styles.subtitle}>
    Connect with like-minded individuals, share your thoughts, and participate in lively discussions on various topics.
  </Text>
  </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.loginButton}
        onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', 
    paddingVertical: 20, 
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20, 
  },
  textContainer: {
    alignItems: 'center', 
    marginBottom: 20, 
    paddingHorizontal: 20, 
  },
  title: {
    fontSize: 35, 
    fontWeight: '600', 
    color: '#1E3A8A', 
    textAlign: 'center',
    marginBottom: 10, 
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20, 
  },
  loginButton: {
    backgroundColor: '#1E3A8A',
    paddingVertical: 12,
    paddingHorizontal: 40, 
    borderRadius: 8, 
    marginRight: 10,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  registerButton: {
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 12,
  },
  registerButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
