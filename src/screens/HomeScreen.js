import React from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native"

const HomeScreen = (props) => {

    return <View>
        <ScrollView>
            <Text style={styles.homeScreen}>Home Screen </Text>
            <View >
                <Button style={styles.nav} onPress={() => { props.navigation.navigate("About") }}
                    title="About" />
                <Button style={styles.nav} onPress={() => { props.navigation.navigate("Detail") }}
                    title="Detail" />
                <Button style={styles.nav} onPress={() => { props.navigation.navigate("Image") }}
                    title="Image" />
                <Button style={styles.nav} onPress={() => { props.navigation.navigate("Counter") }}
                    title="Counter" />
                <Button style={styles.nav} onPress={() => { props.navigation.navigate("Color") }}
                    title="Color" />
            </View>

        </ScrollView>
    </View>
}

const styles = StyleSheet.create({

    homeScreen: {
        fontSize: 100
    },
    nav: {
        fontSize: 80, flex: 1
    }
})

export default HomeScreen;