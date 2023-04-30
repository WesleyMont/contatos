import { StyleSheet, Text, View } from "react-native";

export function PeopleListitem(props) {
    return(
    <View style={styles.container}>
        <View style={styles.image}>
           <Text>{props.name.charAt(0)}</Text>
        </View>

        <View style={styles.information}>
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.number}>{props.number}</Text>
            
        </View>
        
        
    </View>
        
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        padding:10,
        borderBottomWidth:1,
    },
    information:{
        justifyContent:"center"
    },
    image:{
        borderRadius: 50,
        backgroundColor:"grey",
        height:50,
        width:50,
        marginRight:15,
        alignItems:"center",
        justifyContent:"center",
    },
    name:{
        fontSize:15,
        fontWeight:'bold',
        marginBottom:3,
    },
    number:{
        fontSize:13,
        color:"#5A5A5A",
    }
});