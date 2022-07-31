import React, { useState , useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import Style from './src/Style';
import PollData from './Data';
const App=()=>{
  const [vote,setVote]=useState(false);
  let [question,setQuestion]=useState([]);
  let [selected,setSelected]=useState(null);
  let [optionJson,setOptionJson]=useState([{title:"Python",score:50},{title:"javascript",score:30},{title:"go",score:20}])
  const updateVote=()=>{
    if(selected==null)
      return;
    selected.score++;
    console.log(selected.score);
    setVote(!vote)
    PollData[0].totalVotes++;
  }
  const checkVotes=(selectedOption)=>{
    PollData[0].Option.forEach(items => {
      if(items.title==selectedOption.title)
        setSelected(selectedOption)
    });
  }
  return(
    <View style={Style.Container}>
      {
        PollData.map((item)=>(
          <View style={Style.questionContainer}>
            <Text style={Style.texts}>{item.QuestionID}</Text>
              <View style={Style.optionsBox}>
                {
                  optionJson==null?null:
                  optionJson.map((options,index)=>(
                    <View style={Style.checkBoxContainer} key={`${options.title}${index}`}>
                      <TouchableOpacity onPress={()=>checkVotes(options)}>
                        {
                          !vote?
                          <View style={ selected==null?Style.selectedCheckBox:selected.title==options.title?Style.checkBox:Style.selectedCheckBox }/>:
                          <Text style={Style.options}>{options.score}%</Text>
                        }
                      </TouchableOpacity>
                      <View style={{width:'100%',marginLeft:20}}>
                        <Text style={Style.options}>{options.title}</Text>
                        {
                          !vote?null:
                          <View style={[Style.bar,{width:`${options.score}%`}]} />
                        }
                      </View>
                    </View>
                  ))
                }
              </View>
            <View style={Style.resultBox}>
              <Text style={Style.options}>Total Votes : {item.totalVotes} </Text>
                {vote?null:<TouchableOpacity style={Style.btnContainer} onPress={updateVote}>
                  <Text style={Style.btnText}>Vote</Text>
                </TouchableOpacity>}
            </View>
          </View>
        ))
      }
    </View>
  )
}
export default App;