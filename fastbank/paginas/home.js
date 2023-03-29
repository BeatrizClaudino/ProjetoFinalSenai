import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import styles from './styles'


export default function Inicial() {
  
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }  

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#3734B9', '#4552C5', '#6ACDE2','#6ACDE1' ]}
            style={styles.background}>
        <View style={styles.container}>
          <Text style={{ fontFamily: 'Inter_900Black', fontSize: 40 }}>Inter Black</Text>
          <Text style={styles.title}>
            A administração do seu dinheiro sem complicação
          </Text>
          <Image style={styles.image}
          source={require('../assets/mulherCartao.png')}
          > 

          </Image>
        </View>
      </LinearGradient>
      
      
    </View>
  )
}


