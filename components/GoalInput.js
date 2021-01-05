import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'


export default function GoalInput({ onAddGoalHandler }) {
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (text) => setEnteredGoal(text);

    const addGoal = () => {
        onAddGoalHandler(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <View style={styles.goalForm}>
            <TextInput
                value={enteredGoal}
                placeholder="Course Goal"
                style={styles.goalInputText}
                onChangeText={goalInputHandler} />
            <Button title="ADD" onPress={addGoal} />
        </View>
    )
}

const styles = StyleSheet.create({
    goalForm: {
        margin: 40,
        flexDirection: 'row'
    },
    goalInputText: {
        width: '100%',
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#cccc'
    }
})
