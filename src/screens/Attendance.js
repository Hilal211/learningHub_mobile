import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, SafeAreaView, FlatList, ActivityIndicator, Picker ,TouchableOpacity} from 'react-native'
import Classes_List from '../components/classes_list';
import Section_class from '../components/sections_class'
import { DataTable } from 'react-native-paper';

function Attendance() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [classs, setClasss] = useState(null);
  const [section, setSection] = useState(null);
  const [student, setStudent] = useState([]);
  const [status, setStatus] = useState("");

  // sudo php artisan serve --host 192.168.43.68 --port 80



  useEffect(() => {
    fetch(`http://192.168.43.68:8000/api/studentbysection/${section}`)
      .then((response) => response.json())
      .then((json) => setStudent(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [section]);

  const stclassf = (c) => {
    setClasss(c)
  }
  const stsectionf = (c) => {
    setSection(c)
  }


  return (

    <View style={{ flex: 1, padding: 24 }}>
      <Classes_List onChange={stclassf
      } />

      <Section_class idClass={classs}
        onChange={stsectionf}
      />
      {isLoading ? <Text>Loading...</Text> :
        (<View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>



          <DataTable>

            <DataTable.Header>
              <DataTable.Title>First Name</DataTable.Title>
              <DataTable.Title>Last Name</DataTable.Title>
              <DataTable.Title>status</DataTable.Title>
              <DataTable.Title>Action</DataTable.Title>

            </DataTable.Header>

            {student.map(st => (
             
              <DataTable.Row>
                <DataTable.Cell>{st.FName}</DataTable.Cell>
                <DataTable.Cell>{st.LName}</DataTable.Cell>
                <DataTable.Cell>
<View>
                  <Picker
                    style={{ width: 100 }}
                    selectedValue={status}
                    onValueChange={(l) => setStatus(l.value)
                    }
                  >
                    <Picker.Item label="status" value={null} />
                    <Picker.Item label="Present" value="Present" />
                    <Picker.Item label="Late" value="Late" />
                    <Picker.Item label="Absent" value="Absent" />


                  </Picker>
                  </View>

                </DataTable.Cell>

                <DataTable.Cell>
                  <TouchableOpacity
                    // style={styles.buttonContainer}
                    // onPress={() => navigation.navigate('Attendance')}
                    >
                    <Text >Done</Text>
                  </TouchableOpacity>

                </DataTable.Cell>
              </DataTable.Row>
            ))}

          </DataTable>





        </View>
        )}
    </View>
  );
}

export default Attendance
