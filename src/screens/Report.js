import React,{useState,useEffect} from 'react';
import { Text, View, StyleSheet,Picker } from 'react-native';
import Classes_List from '../components/classes_list';
import Section_class from '../components/sections_class'
// import DatePicker from 'react-native-date-picker'
import DateTimePicker from '@react-native-community/datetimepicker';

// import Constants from 'expo-constants';

// You can import from local files
import DropDownPicker from 'react-native-dropdown-picker'

import { VictoryPie, VictoryTooltip, VictoryLabel, VictoryChart, VictoryScatter, VictoryTheme,VictoryGroup,VictoryBar } from "./Victory";
export default function Report() {
  const[reportAll,setReportAll]=useState([])
  const [isLoading, setLoading] = useState(true);
  const [classs, setClasss] = useState(null);
  const [section, setSection] = useState(null);
  // const [date, setDate] = useState(new Date())



  function reportAlls(){
    fetch('http://192.168.43.68:8000/api/countallstudentattendance')
      .then((response) => response.json())
      .then((json) => setReportAll(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    reportAlls();
  }, []);

  const stclassf = (c) => {
    setClasss(c)
  }
  const stsectionf = (c) => {
    setSection(c)
  }

const[state,setState]=useState("");
console.log(state);

const data={
  actual:[
      {x:'Week1',y:30},
      {x:'Week2',y:50},
      {x:'Week3',y:60}

  ]
}




const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  return (
    <View>
<Classes_List onChange={stclassf
      } />

      <Section_class idClass={classs}
        onChange={stsectionf}/>

<View>
      <View>
        <Button onPress={showDatepicker} title="Show date picker!" />
      </View>
      <View>
        <Button onPress={showTimepicker} title="Show time picker!" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>

    {isLoading ? <Text>Loading...</Text> : 
        (<View>
            {/* <VictoryChart style={styles.victorychart}>
        <VictoryBar
         data={data}
         x="name"
        y="value"
          style={{
            data:{
            fill:'orange'
            }
        }} />
        </VictoryChart> */}
        <VictoryPie 
                    data={reportAll}
                    x="value"
                    y="value"

         colorScale={["tomato", "orange", "green"]}
         
         />
    
       
        </View>
    )
    }
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});