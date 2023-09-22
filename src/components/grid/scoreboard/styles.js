import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'yellow'
    },
    text: {
        textAlign: 'center',
        color: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        marginLeft: 30
    },
    rectangle: {
        borderColor: 'yellow',
        borderWidth: 1,
        flexDirection: 'row',
        width:350,
    },
    headerRectangle: {
        borderColor: 'yellow',
        borderWidth: 1
    },
    boardHeader: {
        color: 'white',
        textAlign: 'center'
    },
    label: {
        color: 'white'

    }
})

export default styles;