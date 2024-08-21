import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { WebView } from 'react-native-webview';

export default function DiscussionForumScreen({ route  }) {
  const { authToken } = route.params;


  if (!authToken) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  alert(authToken)

  return (
    <WebView
      source={{
        uri: 'https://313b-106-51-101-186.ngrok-free.app/discussions/new/',
        headers: {
          Authorization: authToken,
        },
      }}
      style={{ marginTop: 50 }}
    />
  );
};
