import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './guess-another-number/components/Header';
import GameOver from './guess-another-number/pages/GameOver';
import GamePage from './guess-another-number/pages/GamePage';
import StartGamePage from './guess-another-number/pages/StartGamePage';

export default function App() {
  const [selectedNumber, setSelectedNumber] = useState();
  const [totalRounds, setTotalRounds] = useState(0);

  const onResetHandler = () => {
    setSelectedNumber(null);
    setTotalRounds(0);
  };

  const gameStartHandler = (number) => {
    setSelectedNumber(number);
  }
  const gameOverHandler = (totalRounds) => setTotalRounds(totalRounds);


  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {
        !selectedNumber
          ? <StartGamePage onGameStart={gameStartHandler} />
          : totalRounds === 0
            ? <GamePage
              selectedNumber={selectedNumber}
              onGameOver={gameOverHandler}
              onReset={onResetHandler}
            />
            : <GameOver
              selectedNuber={selectedNumber}
              totalRounds={totalRounds}
              onReset={onResetHandler}
            />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
