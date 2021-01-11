import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './guess-another-number/components/Header';
import GamePage from './guess-another-number/pages/GamePage';
import StartGamePage from './guess-another-number/pages/StartGamePage';

export default function App() {
  const [selectedNumber, setSelectedNumber] = useState();

  const onResetHandler = () => {
    setSelectedNumber(null);
  };

  const gameStartHandler = (number) => {
    setSelectedNumber(number);
  } 

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {
        !!selectedNumber
          ? <GamePage selectedNumber={selectedNumber} onReset={onResetHandler} />
          : <StartGamePage onGameStart={gameStartHandler} />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
