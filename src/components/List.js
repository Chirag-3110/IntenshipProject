import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList
} from 'react-native';
import styles from '../Style';
const Options=()=>{
    return(
        <View style={styles.listContainer}>
            <TouchableOpacity style={styles.titleContainer}>
                <Text style={styles.title}>View Tasks</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.titleContainer}>
                <Text style={styles.title}>Create Task</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.titleContainer}>
                <Text style={styles.title}>Notifications</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.titleContainer}>
                <Text style={styles.title}>Profile</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Options;