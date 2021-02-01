import React from 'react';
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens'

import GuessAnotherNumberAppDeprecated from './guess-another-number-deprecated/GuessAnotherNumberAppDeprecated';
import GuessAnotherNumberApp from './guess-another-number/GuessAnotherNumberApp';
import MealsNavigator from './the-meals-app/navigation/MealsNavigator';

enableScreens();

export default function App() {
  return (
    // <GuessAnotherNumberAppDeprecated />
    // <GuessAnotherNumberApp />
    <MealsNavigator />
  );
}
