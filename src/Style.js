import { StyleSheet,Dimensions } from "react-native";
const windowWidth=Dimensions.get('window').width;
const windowHeight=Dimensions.get('window').height;
const textColor="black"
const Style=StyleSheet.create({
    Container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#E7E7E7"
    },
    questionContainer:{
        backgroundColor:"white",
        width:windowWidth-30,
        height:2*(windowHeight/3),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
        justifyContent:"space-between",
        padding:10,
        borderWidth:1,
        borderRadius:10,
        borderColor:'#C7C7C7'
    },
    checkBox:{
        width:25,
        height:25,
        borderRadius:25/2,
        borderWidth:3,
        borderColor:"#6E7175",
        backgroundColor:"#2F80F6"
    },
    checkBoxContainer:{
        // justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        marginTop:20,
    },
    texts:{
        fontWeight: 'bold',
        color:textColor,
        fontSize:20,
        padding:10
    },
    selectedCheckBox:{
        width:25,
        height:25,
        borderRadius:25/2,
        borderWidth:3,
        borderColor:"#2F80F6",
    },
    optionsBox:{
        padding:20,
    },  
    options:{
        color:textColor,
        fontWeight:"bold",
        fontSize:20,
        // marginTop:20,
        marginLeft:10
    },
    resultBox:{
        flexDirection:"row",
        justifyContent:"space-between",
        padding:10
    },
    btnContainer:{
        backgroundColor:"#2F80F6",
        width:150,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:5,
        borderWidth:1.5,
        borderColor:"white"    
    },
    btnText:{
        color:"white",
        fontWeight:"bold"
    },
    results:{
        flexDirection:"row",
        // backgroundColor:"red"
    },
    bar:{
        height:5,
        backgroundColor:"#2F80F6",
        borderRadius:10
    }
})
export default Style;