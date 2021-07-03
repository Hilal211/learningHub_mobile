import React ,{ useRef }from 'react'
import { StyleSheet, View, Text ,TouchableOpacity,Image,Animated,SafeAreaView,Button} from 'react-native'
import homepic from '../../assets/graduation-hat.png'

function Home(props) {

    const { navigation } = props
    const fadeAnim = useRef(new Animated.Value(0)).current;


    
    const fadeIn = () => {
       
        Animated.loop( Animated.timing(fadeAnim, {
              toValue:1,
              duration: 500
            })).start( )
          
      };
    
     

  return (
    <View style={styles.container}>
        <Image source={homepic} style={{ width: 200, height: 200 }}/>
        <View style={{backgroundColor:'#fff',padding:20,borderRadius:6}}>
        <Text style={styles.text}>Learning Hub</Text>
        </View>
      

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Attendance')}>
        <Text style={styles.buttonText}>Attendance</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Report')}>
        <Text style={styles.buttonText}>Report</Text>
      </TouchableOpacity>



      <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            // Bind opacity to animated value
            opacity: fadeAnim
          }
        ]}
      >
        <Text style={styles.fadingText}>Fading View!</Text>
      </Animated.View>
      <View style={styles.buttonRow}>
        <Button title="Fade In View" onPress={fadeIn} />
      </View>
    </SafeAreaView>


    
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb'
  },
  text: {
    color: '#ff6347',
    textShadowColor:'#ff6347',
    fontSize: 50,
    fontWeight: 'bold'
  },
  buttonContainer: {
    backgroundColor: '#ff6347',
    borderRadius: 10,
    padding: 10,
    margin: 20,
    width:150,
    textAlign:'center'
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    textAlign:'center'
  },

  fadingContainer: {
    padding: 20,
    backgroundColor: "powderblue"
  },
  fadingText: {
    fontSize: 28
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: "space-evenly",
    marginVertical: 16
  }


})

export default Home
