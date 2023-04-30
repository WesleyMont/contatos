import { StyleSheet, FlatList } from "react-native";
import { PeopleListitem } from "../PeopleListItem";

export function PeopleList (props) {
    return (
        <FlatList
        data={props.data}
        renderItem={({ item })=>(
            <PeopleListitem name={item.name} number={item.number}></PeopleListitem>
        )}
        keyExtractor={item => item.key} 
        style={styles.container}
        />
    );
}

const styles = StyleSheet.create({
    container:{
        margin:20,
    },
});