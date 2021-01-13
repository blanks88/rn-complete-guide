import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Alert, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

import SelectedNumber from '../components/SelectedNumber'
import PButton from '../components/PButton'
import Input from '../components/Input'
import PText from '../components/PText'
import Card from '../components/Card'

export default function StartGamePage({ onGameStart }) {
    const [confirmed, setConfirmed] = useState(false)
    const [enteredValue, setEnteredValue] = useState('');
    const [selectedNumber, setSelectedNumber] = useState(null);

    const numberInputHandler = (t) => setEnteredValue(t.replace(/[^0-9]/g, ''));
    const resetInputHandler = () => {
        setSelectedNumber(null);
        setConfirmed(false);
        setEnteredValue('');
        onGameStart(null);
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

        Keyboard.dismiss();
        setConfirmed(true);
        setEnteredValue('');
        setSelectedNumber(chosenNumber);
    }


    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.page}>
                <PText style={styles.pageTitle}>Star a new Game!</PText>
                <Card style={styles.inputCard}>
                    <PText style={styles.cardTitle}>Select a Number</PText>
                    <Input
                        blurOnSubmit
                        value={enteredValue}
                        style={styles.input}
                        keyboardType='numeric'
                        onChangeText={numberInputHandler}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <PButton color={'accent'} secondary={true} onPress={resetInputHandler}>
                            <Ionicons name="refresh" size={32} />
                            </PButton>
                        </View>
                        <View style={styles.button}>
                            <PButton onPress={confirmInputHandler}>
                                <Ionicons name="checkmark" size={32} />
                            </PButton>
                        </View>
                    </View>
                </Card>
                {
                    confirmed && <Card style={styles.selectedNumberCard}>
                        <PText>You selected</PText>
                        <SelectedNumber>
                            {selectedNumber}
                        </SelectedNumber>
                        <PButton onPress={() => onGameStart(selectedNumber)}>
                            START GAME
                        </PButton>
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
        marginVertical: 30,
        fontFamily: 'hack-bold',
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
        width: 140
    },
    selectedNumberCard: {
        marginVertical: 20,
        alignItems: 'center',
    }
})
