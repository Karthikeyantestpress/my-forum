import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/welcome.png')} style={styles.image} />

      <View style={styles.textContainer}>
        <Text style={styles.title}>Discover Your Dream Job here</Text>
        <Text style={styles.subtitle}>
          Explore all the existing job roles based on your interest and study major
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.loginButton}>
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
    justifyContent: 'space-around', // Distributes elements more evenly
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // Background color closer to the design
    paddingVertical: 20, // Adjusted vertical padding to reduce excessive space
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20, // More balanced space between image and text
  },
  textContainer: {
    alignItems: 'center', // Center the text container
    marginBottom: 20, // Space between text and buttons
    paddingHorizontal: 20, // Added padding to match the layout
  },
  title: {
    fontSize: 35, // Updated size to match the Figma design
    fontWeight: '600', // Updated font weight as per design
    color: '#1E3A8A', // Darker blue as per design
    textAlign: 'center',
    marginBottom: 10, // Adjusted space between title and subtitle
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
    paddingHorizontal: 20, // Ensures buttons are not edge-to-edge
  },
  loginButton: {
    backgroundColor: '#1E3A8A',
    paddingVertical: 12,
    paddingHorizontal: 40, // Adjusted for more accurate button width
    borderRadius: 8, // Less rounded to match the Figma design
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
