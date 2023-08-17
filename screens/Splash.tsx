import React from 'react';
import { Button, Image, Pressable, StyleSheet, Text, View } from 'react-native';

interface SplashProps { }

const Splash: React.FC<SplashProps> = ({ navigation }: any) => {
    return (
        <View>
            <Image
                source={require("../assets/images/shape.png")}
            />
            <View style={styles.contentWrap}>
                <Image source={require("../assets/images/splash-img.png")} />
                <View style={styles.textWrap}>
                    <Text style={styles.title}>Gets things with TODs</Text>
                    <Text style={styles.desc}>Lorem ipsum dolor sit amet consectetur. Eget sit nec et euismod. Consequat urna quam felis interdum quisque. Malesuada adipiscing tristique ut eget sed.</Text>
                </View>

                <View style={{ width: "80%", marginTop: 50 }}>
                    <Pressable style={styles.btnWrap}>
                        <Button
                            title={"Get Started"}
                            color="#fff"
                            onPress={() =>
                                navigation.navigate("Register")
                            }
                        />
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default Splash;


const styles = StyleSheet.create({

    contentWrap: {
        alignItems: "center",
        marginTop: 40,
        gap: 15
    },
    textWrap: {
        marginTop: 40,
        alignItems: "center",
        gap: 20,
        width: "50%"
    },
    title: {
        fontWeight: "bold",
        fontSize: 20
    },
    desc: {
        fontSize: 14,
        textAlign: "center"
    },
    btnWrap: {
        backgroundColor: "#50C2C9",
        marginTop: 100,
        padding: 10,
        width: "100%",
        borderRadius: 10,
    }

})