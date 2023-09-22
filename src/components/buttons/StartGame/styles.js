import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        width:400,
        height:400,
        borderRadius: 200,
        backgroundColor:'red',
        marginTop:30
        
    },
    image:{
        marginTop:40,
        height:100,
        width:100,
        alignSelf:'center'
    },
    text_container:{
        flexDirection: 'row',
        justifyContent: 'center',
        margin:10
    },
    text:{
        marginTop:30,
        fontSize:30,
        color: 'white',
        fontWeight: 'bold',
        fontStyle : 'italic',
    }
});

export default styles;