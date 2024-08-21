import React, { useRef, useEffect,useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { handleLogin } from '../auth/HandleLogin';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }) {
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const emailInputRef = useRef(null);
  
  

  const onLogin = async () => {
    const token = await handleLogin(username, password);
    if (token) {
      navigation.replace('Forum', { authToken: token });
    }
  };

  useEffect(() => {
    emailInputRef.current?.focus();
  }, []);
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.backdrop}>
        <Image source={require('../assets/login-back-ground.png')} style={styles.backgroundImage} />
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Login here</Text>
            <Text style={styles.headerSubtitle}>Welcome back you’ve been missed!</Text>
          </View>
          
          <View style={styles.form}>
            <View style={[styles.inputContainer, emailFocused && styles.inputContainerFocused]}>
              <TextInput
                placeholder="UserName"
                ref={emailInputRef} 
                style={styles.input}
                value={username}
                onChangeText={setUsername}
                placeholderTextColor="#626262"
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
              />
            </View>
            <View style={[styles.inputContainer, passwordFocused && styles.inputContainerFocused]}>
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.input}
                placeholderTextColor="#626262"
                value={password}
                onChangeText={setPassword}
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
              />
            </View>
            <Text style={styles.forgotPassword}>Forgot your password?</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.signInButton} onPress={onLogin}>
              <Text style={styles.buttonText}>Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.createAccountButton}
            >
              <Text style={styles.createAccountText}>Create new account</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.socialMediaContainer}>
            <Text style={styles.orContinue}>Or continue with</Text>
            <View style={styles.socialMediaButtons}>
              <Image
                source={require('../assets/google.png')}
                style={styles.socialIcon}
              />
              <Image
                source={require('../assets/facebook.png')}
                style={styles.socialIcon}
              />
              <Image
                source={require('../assets/apple.png')}
                style={styles.socialIcon}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backdrop: {
    width: '100%',
    height: '100%',
    position: 'relative',
    borderRadius: 50,
    backgroundColor: '#fff',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: '300%',
    height: '300%',
    top: -100,
    left: -100,
    resizeMode: 'contain',
  },
  content: {
    width: '90%',
    height: '100%',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  header: {
    width: '80%',
    marginBottom: 40,
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: '700',
    color: '#1f42bb',
  },
  headerSubtitle: {
    marginTop :20,
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
  },
  form: {
    marginTop: 50,
    width: '100%',
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
    backgroundColor: '#f1f4ff',
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 15,
    opacity: 0.5, // Initially hidden
  },
  inputContainerFocused: {
    borderWidth: 2,
    borderColor: '#1f42bb',   
    opacity: 1, // Fully visible when focused
  },
  input: {
    height: 50,
    fontSize: 16,
    color: '#626262',
  },
  forgotPassword: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1f42bb',
    textAlign: 'center',
    marginVertical: 10,
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 20,
    alignItems: 'center',
  },
  signInButton: {
    width: '100%',
    backgroundColor: '#1f42bb',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 20,
  },
  createAccountButton: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
  },
  createAccountText: {
    color: '#494949',
    fontWeight: '600',
    fontSize: 14,
  },
  socialMediaContainer: {
    alignItems: 'center',
  },
  orContinue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1f42bb',
    marginBottom: 20,
  },
  socialMediaButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  socialIcon: {
    width: 60,
    height: 60,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#ececec',
    resizeMode: 'contain',
  },
});
