import AsyncStorage from '@react-native-async-storage/async-storage';

export const handleLogin = async (username, password) => {
  alert(username)
  const url = 'https://313b-106-51-101-186.ngrok-free.app/api/v2.5/auth-token/';
  const payload = JSON.stringify({ username, password });

  try {
    const existingToken = await AsyncStorage.getItem('authToken');
      
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
      },
      body: payload,
    });

    if (response.ok) {
      const data = await response.json();
      const token = `JWT ${data.token}`;
        
      alert(token)

      return token; // Return success message
    } else {
      const errorData = await response.json();
      let errorMessage = "Error: ";
      for (let key in errorData) {
        errorMessage += `${key}: ${errorData[key]} `;
      }
      return errorMessage.trim(); // Return error message
    }
  } catch (error) {
    return `Network Error: ${error.message}`; // Return network error message
  }
};
