import React from 'react';
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens'

import GuessAnotherNumberAppDeprecated from './guess-another-number-deprecated/GuessAnotherNumberAppDeprecated';
import GuessAnotherNumberApp from './guess-another-number/GuessAnotherNumberApp';
import MealsApp from './the-meals-app/MealsApp';

enableScreens();

export default function App() {
  return (
    // <GuessAnotherNumberAppDeprecated />
    // <GuessAnotherNumberApp />
    <MealsApp />
  );
}
