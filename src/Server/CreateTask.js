import {API} from 'aws-amplify';
import * as mutations from '../graphql/mutations';

const AddTask=async(mail,task,content)=>{
    try {
        const taskData={
            taskName: task,
            taskDescription:content,
            createAt:"Hello",
            createDate:"hello",
            usersTasksId:mail
        }
        // console.log(mail,task,content)
        const taskResponse=await API.graphql({
            query:mutations.createTask,
            variables:{
                input:taskData
            }
        });
        console.log(taskResponse);
    } catch (error) {
        console.log(error);
    }
}
export default AddTask;