import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        
        backgroundColor:'black',
        
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
    headerText:{
        color: 'yellow',
        fontSize:30,
        fontStyle: 'italic',
        alignItems:'center'
    },
    list_container: {
        borderWidth : 3,
        position:'relative'
        
    },
    board_container:{
        alignItems:'center'
    }
});

export default styles;