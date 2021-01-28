import React from 'react';
import 'react-native-gesture-handler';

import GuessAnotherNumberAppDeprecated from './guess-another-number-deprecated/GuessAnotherNumberAppDeprecated';
import GuessAnotherNumberApp from './guess-another-number/GuessAnotherNumberApp';
import MealsNavigator from './the-meals-app/navigation/MealsNavigator';


export default function App() {
  return (
    // <GuessAnotherNumberAppDeprecated />
    // <GuessAnotherNumberApp />
    <MealsNavigator />
  );
}
