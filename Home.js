import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = ({navigation}) => {
  return (
    <SafeAreaView>
        <View>
           <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Text style={{fontSize:20}}>Profile</Text>
           </TouchableOpacity>
        </View>
        <View>
            <Text></Text>
        </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})