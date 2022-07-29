import React ,{useState} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import styles from '../Style';
import AddTask from '../Server/CreateTask';
const CreateTask=()=>{
    const [mail,setMail]=useState(null);
    const [taskName,setTaskName]=useState(null);
    const [content,setTaskContent]=useState(null);
    const createTask=async()=>{
        try {
            if(mail==null || taskName==null || content==null)
                throw "Enter all fields";
            await AddTask(mail,taskName,content);
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <View style={styles.createtaskContainer}>
            <Text style={styles.titleTask}>Assign task to any Person</Text>
            <View style={styles.inputBoxex}>
                <TextInput 
                    placeholder='Assigned User email' 
                    placeholderTextColor={"white"} style={styles.input} 
                    onChangeText={(mail)=>setMail(mail)}
                />
                <TextInput 
                    placeholder='Task Name' 
                    placeholderTextColor={"white"} style={styles.input} 
                    onChangeText={(taskName)=>setTaskName(taskName)}    
                />
                <TextInput placeholder='Task Content' placeholderTextColor={"white"} 
                    multiline={true}
                    style={[styles.input,{height:'40%',textAlignVertical:"top"}]} 
                    onChangeText={(content)=>setTaskContent(content)}
                />
            </View>
            <TouchableOpacity 
                style={styles.btnContainer}
                onPress={createTask}
            >
                <Text style={styles.btnText}>Send Task</Text>
            </TouchableOpacity>
        </View>
    )
}
export default CreateTask