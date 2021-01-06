import React, { useState } from 'react'
import { Alert, Button, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'

import Colors from '../constants/colors'
import Input from '../components/Input'
import Card from '../components/Card'
import SelectedNumber from '../components/SelectedNumber'

export default function StartGamePage() {
    const [confirmed, setConfirmed] = useState(false)
    const [enteredValue, setEnteredValue] = useState('');
    const [selectedNumber, setSelectedNumber] = useState(null);

    const numberInputHandler = (t) => setEnteredValue(t.replace(/[^0-9]/g, ''));
    const resetInputHandler = () => {
        setSelectedNumber(null);
        setConfirmed(false);
        setEnteredValue('');
    }
    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid number!',
                'Number mut be between 1 and 99',
                [
                    {
                        text: 'Okay',
                        style: 'destructive',
                        onPress: resetInputHandler
                    }
                ]
            )
            return;
        }

        setConfirmed(true);
        setEnteredValue('');
        setSelectedNumber(chosenNumber);
        Keyboard.dismiss();
    }


    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.page}>
                <Text style={styles.pageTitle}>Star a new Game!</Text>
                <Card style={styles.inputCard}>
                    <Text style={styles.cardTitle}>Select a Number</Text>
                    <Input
                        blurOnSubmit
                        value={enteredValue}
                        style={styles.input}
                        keyboardType='numeric'
                        onChangeText={numberInputHandler}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="RESET" color={Colors.accent} onPress={resetInputHandler} />
                        </View>
                        <View style={styles.button}>
                            <Button title="CONFIRM" color={Colors.primay} onPress={confirmInputHandler} />
                        </View>
                    </View>
                </Card>
                {
                    confirmed && <Card style={styles.selectedNumberCard}>
                        <Text>You selected</Text>
                        <SelectedNumber>
                            {selectedNumber}
                        </SelectedNumber>
                        <Button title="START GAME" />
                    </Card>
                }
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    pageTitle: {
        fontSize: 25,
        marginVertical: 30
    },
    cardTitle: {
        fontSize: 18,
        marginVertical: 10
    },
    inputCard: {
        width: 350,
        maxWidth: '80%',
        alignItems: 'center',
    },
    input: {
        width: 70,
        textAlign: 'center'
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        width: 120
    },
    selectedNumberCard: {
        marginVertical: 20,
        alignItems: 'center',
    }
})
