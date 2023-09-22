import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        flexDirection:'row',        
        backgroundColor:'black',
        height:40
        
    },
    icon_container:{
        flexDirection:'row',
        
    },
    backgroundImage:{
       
        marginBottom:10,
        alignSelf:'center',
        width:1000,
        height:800,
    },   
    text:{
        marginTop:30,
        fontSize:30,
        color: 'white',
        fontWeight: 'bold',
        fontStyle : 'italic',
    },

    button1: {
        height : 20,
        width:20,
        borderRadius:10,
        marginTop:20
        
    },
    button2: {
        height : 20,
        width:20,
        borderRadius:10
        
    },
    image:{
        width:200,
        height:20,
        
    },
    value:{
        fontSize:25,
        color:'yellow',
        textAlign:'right',
        justifyContent:'center',
    },
    value_container:{
        backgroundColor :'black',
        width:45,
        left :155,
        alignItems:'center'
        
    }
 
});

export default styles;