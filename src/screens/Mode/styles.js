import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    text:{
        fontSize:70,
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily:'cursive',
        color: 'white'
    },
    container:{
        alignItems: 'center',
        backgroundColor:'black',
        flex:1
        
    },
    image_and_buttons_container:{
        flexDirection: 'row',
        borderWidth:4,
        borderColor: 'yellow'

    },
    big_image:{
        marginTop:10
    }
});

export default styles;