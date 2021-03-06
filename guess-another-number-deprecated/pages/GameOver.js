import React from 'react';
import { Button, Image, StyleSheet, View } from 'react-native';

import PText from '../components/PText';

export default function GameOver({ totalRounds, selectedNuber, onReset }) {
    return (
        <View style={styles.page}>
            <PText style={styles.pageTitle}> The Game is Over!</PText>

            <View style={styles.imageContainer}>
                <Image
                    fadeDuration={1000}
                    resizeMode="cover"
                    style={styles.image}
                    // source={require('../../assets/success.png')}
                    source={{
                        uri: 'https://cdn.pixabay.com/photo/2013/12/21/20/37/saint-peters-basilica-231865_1280.jpg'
                    }}
                />
            </View>

            <PText>Number of rounds: {totalRounds}</PText>
            <PText>The number was: {selectedNuber}</PText>
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
    imageContainer: {
        width: 300,
        height: 300,
        marginVertical: 30,
        borderRadius: 200,
        borderColor: 'black',
        overflow: 'hidden',
        borderWidth: 1,
    },

    image: {
        width: '100%',
        height: '100%',
    }
})
