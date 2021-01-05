import React, { useState } from 'react'
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native'


export default function GoalInput({ visible, onAddGoalHandler, onCancelHandler }) {
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (text) => setEnteredGoal(text);

    const addGoal = () => {
        onAddGoalHandler(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal visible={visible} animationType='slide'>
            <View style={styles.goalInputContainer}>
                <TextInput
                    value={enteredGoal}
                    placeholder="Course Goal"
                    style={styles.goalInputText}
                    onChangeText={goalInputHandler} />
                <View style={styles.buttonContainer}>
                    <View style={styles.callToAction}>
                        <Button title="CANCEL" color="red" onPress={onCancelHandler} />
                    </View>
                    <View style={styles.callToAction}>
                        <Button title="ADD" onPress={addGoal} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    goalInputContainer: {
        flex: 1,
        margin: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    goalInputText: {
        padding: 10,
        width: '100%',
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#cccc'
    },
    buttonContainer: {
        width: '70%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    callToAction: {
        width: '45%'
    }
})
