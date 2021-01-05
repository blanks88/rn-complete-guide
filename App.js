import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)

  const onCancelHandler = () => setIsAddMode(false);
  const onAddGoalHandler = (enteredGoal) => {
    if (!!enteredGoal) {
      setCourseGoals(courseGoals => [...courseGoals, { id: Math.random(), name: enteredGoal }]);
    }
    setIsAddMode(false);
  };


  const onDeleteHandler = (item) =>
    setCourseGoals(courseGoals => courseGoals.filter(course => course.id !== item.id));


  return (
    <View style={styles.container}>
      <Button title="ADD GOAL" onPress={setIsAddMode.bind(this, true)} />
      <GoalInput
        visible={isAddMode}
        onCancelHandler={onCancelHandler}
        onAddGoalHandler={onAddGoalHandler}
      />
      <FlatList
        data={courseGoals}
        style={styles.goalsContainer}
        keyExtractor={(item) => `${item.id}`}
        renderItem={itemData =>
          <GoalItem
            item={itemData.item}
            onDeleteHandler={onDeleteHandler}
          />}
      >
      </FlatList>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  goalsContainer: {
    width: '100%'
  }
});
