import React, { useState, useRef } from 'react'
import { Alert, Button, StyleSheet, Text, View } from 'react-native'

import SelectedNumber from '../components/SelectedNumber'
import Card from '../components/Card'

function generateRandomBetween(min, max, exclude) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const ranNbr = Math.floor(Math.random() * (max - min)) + min;

    if (ranNbr == exclude)
        return generateRandomBetween(min, max, exclude);

    return ranNbr;

}

export default function GamePage({ selectedNumber, onReset }) {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, selectedNumber));
    const currentHight = useRef(100);
    const currentLow = useRef(1);

    const nextGuessHandler = (direction) => {
        if ((direction == 'lower' && currentGuess > selectedNumber)
            || (direction == 'grater' && currentGuess < selectedNumber)) {
            Alert.alert(
                'Don\'t lie!',
                'You know this is wrong...',
                [
                    {
                        text: 'Sorry!',
                        style: 'cancel'
                    }
                ]
            )
        }

        if (direction == 'lower') {
            currentLow.current = currentGuess;
        } else {
            currentHight.current = currentGuess;
        }

        setCurrentGuess(
            generateRandomBetween(currentLow.current, currentHight.current, selectedNumber)
        );

    };

    return (
        <View style={styles.page}>
            <Text style={styles.pageTitle}>Opponent's Guess</Text>
            <SelectedNumber>
                {currentGuess}
            </SelectedNumber>
            <Card style={styles.buttonsContainer}>
                <View style={styles.buttons}>
                    <Button title="LOWER" onPress={nextGuessHandler.bind(this, 'lower')} />
                </View>
                <View style={styles.buttons}>
                    <Button title="GREATER" onPress={nextGuessHandler.bind(this, 'grater')} />
                </View>
            </Card>
            <Button title="RESET" onPress={onReset} />
        </View>
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
    buttonsContainer: {
        width: 350,
        maxWidth: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttons: {
        width: '45%'
    }
})