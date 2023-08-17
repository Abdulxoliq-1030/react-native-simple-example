import React from 'react';
import { Button, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

interface RegistrationProps { }

const Registration: React.FC<RegistrationProps> = ({ navigation }: any) => {

    return (
        <View>
            <Image
                source={require("../assets/images/shape.png")}
            />

            <View style={styles.wrapper}>
                <View style={styles.textWrap}>
                    <Text style={styles.titleText}>Welcome to Onboard! </Text>
                    <Text style={styles.descText}>Let’s help to meet up your tasks.</Text>
                </View>
                <View style={styles.inputWrap}>
                    <TextInput placeholder='Enter your full name' placeholderTextColor="#000" style={styles.input} />
                    <TextInput placeholder='Enter your Email' placeholderTextColor="#000" style={styles.input} />
                    <TextInput secureTextEntry={true} placeholder='Enter Password' placeholderTextColor="#000" style={styles.input} />
                    <TextInput secureTextEntry={true} placeholder='Confirm password' placeholderTextColor="#000" style={styles.input} />
                </View>

                <View style={{ width: "90%" }}>
                    <Pressable style={styles.btnWrap}>
                        <Button
                            title={"Register"}
                            color="#fff"
                            onPress={() =>
                                navigation.navigate("Register")
                            }
                        />
                    </Pressable>
                    <View style={{ marginTop: 15, alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
                        <Text style={{ fontSize: 14 }}>Already have an account ?</Text>
                        <Pressable>
                            <Button title='Sign In' color="#50C2C9" onPress={() =>
                                navigation.navigate("Register")
                            } /></Pressable>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Registration;



const styles = StyleSheet.create({

    wrapper: {
        alignItems: "center",
        backgroundColor: "#f0f4f3",
        marginTop: 80
    },

    textWrap: {
        alignItems: "center",
        gap: 10,

    },
    titleText: {
        fontWeight: "bold",
        fontSize: 20
    },
    descText: {
        fontSize: 15,
        textAlign: "center"
    },
    inputWrap: {
        marginTop: 80,
        gap: 30,
        width: "90%"
    },

    input: {
        padding: 15,
        borderRadius: 30,
        backgroundColor: "#fff",
        width: "100%"
    },
    btnWrap: {
        backgroundColor: "#50C2C9",
        marginTop: 100,
        padding: 10,
        width: "100%",
        borderRadius: 10,
    }

})