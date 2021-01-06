import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './guess-another-number/components/Header';
import StartGamePage from './guess-another-number/pages/StartGamePage';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      <StartGamePage />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
