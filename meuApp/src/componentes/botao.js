import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Botao = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        backgroundColor: '#FFEF00',
        borderRadius: 10,
        paddingVertical: 14,
        paddingHorizontal: 20,
        alignItems: 'center',
        position: 'absolute',
        top: 400
    },
    text: {
        color: '#FF141E',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default Botao;