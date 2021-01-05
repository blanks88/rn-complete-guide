import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([])

  const goalInputHandler = (text) => setEnteredGoal(text);
  const onAddGoalHnadler = () => {
    setCourseGoals(courseGoals => [...courseGoals, enteredGoal]);
    console.log(courseGoals);
  };

  return (
    <View style={styles.container}>
      <View style={styles.goalForm}>
        <TextInput
          placeholder="Course Goal"
          style={styles.goalInputText}
          onChangeText={goalInputHandler} />
        <Button title="ADD" onPress={onAddGoalHnadler} />
      </View>
      <FlatList
        style={styles.goalsConatiner} 
        data={courseGoals}
        renderItem={
          itemData => <View style={styles.goalItem}>
            <Text key={itemData.item}>{itemData.item}</Text>
          </View>
        }
        keyExtractor={(item, index) => `${item}-${index}`}
      >
      </FlatList>
      {/* <ScrollView style={styles.goalsConatiner}>
        {
          courseGoals.map(goal => <View style={styles.goalItem}>
            <Text key={goal}>{goal}</Text>
          </View>)
        }
      </ScrollView> */}
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
  goalForm: {
    margin: 40,
    flexDirection: 'row'
  },
  goalInputText: {
    width: '100%',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccc'
  },
  goalsConatiner: {
    width: '100%',
  },
  goalItem: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#cccc',
  }
});
