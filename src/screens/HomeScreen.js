import React from 'react'
import { View, Text, Image, Platform, TouchableOpacity, Linking } from 'react-native'
import user from '../assets/images/user-profile.jpg';
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";


const makeCall = () => {

  let phoneNumber = '';

  if (Platform.OS === 'android') {
    phoneNumber = 'tel:${1234567890}';
  } else {
    phoneNumber = 'telprompt:${1234567890}';
  }

  Linking.openURL(phoneNumber);
};

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{paddingLeft:20, paddingRight: 20}}>
      <View style={{ marginTop: 20, width: '100%', borderRadius: 10, backgroundColor: '#00A0EA', padding: 20 }}>
        <Text style={{ color: 'white', fontSize: 14 }}>
          32343243244444
        </Text>
        <Text style={{ color: 'white', fontSize: 14, marginTop: 5 }}>
          2323454545454
        </Text>
        <Text style={{ color: "white", marginTop: 20 }}>
          Balance
        </Text>
        <View style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>$ 1.00</Text>
          <Image style={{ width: 50, height: 50, resizeMode: 'contain' }} source={user} />
        </View>
      </View>
      </View>
      
     <View style ={{backgroundColor:"#ebe9e9", paddingBottom: 60, marginTop: 20, borderTopLeftRadius: 50, borderTopRightRadius: 50}}>
     <View style={{ display: "flex", justifyContent: "center", marginLeft: 50 }}>
     <Text style={{ color: 'black', fontSize: 18, fontWeight: 800, marginTop: 20, marginBottom: 20 }}>
          Services
        </Text>
        <View style={{ display: 'flex', flexDirection: "row", justifyContent: "space-around", width: "80%" }}>
          <View style={{ width: 80, height: 90, backgroundColor: 'white', borderColor: 'black', borderWidth: 1, borderRadius: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>

            <Icon2 name="account-circle-outline" color='#0a66c2' size={30} style={{ marginBottom: 20 }} />
            <Text style={{color:'#0a66c2', fontWeight: 'bold'}}>Status</Text>

          </View>
          <View style={{ width: 80, height: 90, backgroundColor: 'white', borderColor: 'black', borderWidth: 1, borderRadius: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>

            <Icon2 name="account" color='#0a66c2' size={30} style={{ marginBottom: 20 }} />
            <Text style={{color:'#0a66c2', fontWeight: 'bold'}}>Friends</Text>

          </View>
          <View style={{ width: 80, height: 90, backgroundColor: 'white', borderColor: 'black', borderWidth: 1, borderRadius: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>

            <Icon2 name="phone-dial" color='#0a66c2' size={30} style={{ marginBottom: 20 }} />
            <Text style={{color:'#0a66c2', fontWeight: 'bold'}}>Caller ID</Text>

          </View>
        </View>
      </View>
      <View style={{ display: "flex", justifyContent: "center", marginLeft: 50 }}>
        <View style={{ display: 'flex', flexDirection: "row", justifyContent: "space-around", width: "80%" }}>
          <View style={{ width: 80, height: 90, backgroundColor: 'white', marginTop: 30, borderColor: 'black', borderWidth: 1, borderRadius: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>

            <Icon2 name="face-man" color='#0a66c2' size={30} style={{ marginBottom: 20 }} />
            <Text style={{color:'#0a66c2', fontWeight: 'bold'}}>Profile</Text>

          </View>
          <View style={{ width: 80, height: 90, backgroundColor: 'white', marginTop: 30, borderColor: 'black', borderWidth: 1, borderRadius: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>

            <Icon2 name="cash" color='#0a66c2' size={30} style={{ marginBottom: 20 }} />
            <Text style={{color:'#0a66c2', fontWeight: 'bold'}}>Balance</Text>

          </View>
          <View style={{ width: 80, height: 90, backgroundColor: 'white', marginTop: 30, borderColor: 'black', borderWidth: 1, borderRadius: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>

            <Icon2 name="phone-voip" color='#0a66c2' size={30} style={{ marginBottom: 20 }} />
            <Text style={{color:'#0a66c2', fontWeight: 'bold'}}>DID</Text>

          </View>
        </View>
      </View>
      <View style={{ display: "flex", justifyContent: "center", marginLeft: 50 }}>
        <View style={{ display: 'flex', flexDirection: "row", justifyContent: "space-around", width: "80%" }}>
          <View style={{ width: 80, height: 90, backgroundColor: 'white', marginTop: 30, borderColor: 'black', borderWidth: 1, borderRadius: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>

            <Icon2 name="send" color='#0a66c2' size={30} style={{ marginBottom: 20 }}/>
            <Text style={{color:'#0a66c2', fontWeight: 'bold'}}>Send SMS</Text>

          </View>
          <View style={{ width: 80, height: 90, backgroundColor: 'white', marginTop: 30, borderColor: 'black', borderWidth: 1, borderRadius: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>

            <Icon2 name="cash-check" color='#0a66c2' size={30} style={{ marginBottom: 20 }} />
            <Text style={{color:'#0a66c2', fontWeight: 'bold'}}>Buy Credit</Text>

          </View>
          <View style={{ width: 80, height: 90, backgroundColor: 'white', marginTop: 30, borderColor: 'black', borderWidth: 1, borderRadius: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>

            <Icon2 name="sim" color='#0a66c2' size={30} style={{ marginBottom: 20 }} />
            <Text style={{color:'#0a66c2', fontWeight: 'bold'}}>Recharge</Text>

          </View>
        </View>
      </View>
     </View>

      <View style={{ position: 'absolute', bottom: 20, right: 10 }} >
        <TouchableOpacity onPress={() => makeCall()} activeOpacity={0.7} style={{ backgroundColor: 'red', borderRadius: 50, padding: 5 }} >
          <Icon2 name="dots-grid" color='white' size={40} />
          {/* <Image source={user} style={{width:20,height:20,resizeMode:'contain'}} /> */}
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeScreen