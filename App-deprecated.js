import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import Header from './guess-another-number-deprecated/components/Header';
import GameOver from './guess-another-number-deprecated/pages/GameOver';
import GamePage from './guess-another-number-deprecated/pages/GamePage';
import StartGamePage from './guess-another-number-deprecated/pages/StartGamePage';

export default function AppDeprecated() {
  const [selectedNumber, setSelectedNumber] = useState();
  const [totalRounds, setTotalRounds] = useState(0);

  let [fontsLoaded] = useFonts({
    'hack': require('./assets/fonts/Hack-Regular.ttf'),
    'hack-bold': require('./assets/fonts/Hack-Bold.ttf'),
  });

  if (!fontsLoaded) return <AppLoading />
  

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
