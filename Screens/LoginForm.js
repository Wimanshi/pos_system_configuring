import React, {Component} from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native';

export default class LoginForm extends React.Component {
    render () {
        return (
            <View style={styles.container}>
            <StatusBar barStyle="light-content" />
                <TextInput placeholder="Username or email" placeholderTextColor="rgba(255,255,255,0.8)" returnKeyType="next" keyboardType="email-address" autoCapitalize='none' autoCorrect={false} style={styles.input} onSubmitEditing={() => this.passwordInput.focus()}/>
                <TextInput placeholder="Password" placeholderTextColor="rgba(255,255,255,0.8)" secureTextEntry returnKeyType="go" style={styles.input} ref={(input) => this.passwordInput = input} />
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText} /*onPress={()=> this.props.navigation.navigate("Profile")}*/ >
                        LOGIN
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding:20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 15,
        color: '#fff',
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#298169',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        color: "#fff",
        fontWeight: '700'
    }
});