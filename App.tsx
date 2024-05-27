import * as React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WebView from 'react-native-webview';
import { ActivityIndicator, Dimensions, View } from 'react-native';

function HomeScreen() {
  const [load, setLoad] = React.useState(true)
  return (
    <View style={{flex:1}}>
      <WebView onLoad={()=>setLoad(false)} source={{ uri: 'https://indiarailinfo.com/' }} style={{ flex: 1 }} />
      {load && <ActivityIndicator
          style={{ position: "absolute", top: Dimensions.get('window').height / 2, left: Dimensions.get('window').width / 2 }}
          size="large"
        />}
    </View>
  );
}

function SettingsScreen() {
  const [load, setLoad] = React.useState(true)
  return (
    <View style={{flex:1}}>
      <WebView onLoad={()=>setLoad(false)} source={{ uri: 'https://www.trainman.in/coach-position' }} style={{ flex: 1 }} />
      {load && <ActivityIndicator
          style={{ position: "absolute", top: Dimensions.get('window').height / 2, left: Dimensions.get('window').width / 2 }}
          size="large"
        />}
    </View>
  );
}

function TrackingScreen() {
  const [load, setLoad] = React.useState(true)
  return (
    <View style={{flex:1}}>
      <WebView onLoad={()=>setLoad(false)}  source={{ uri: 'https://m.etrain.info/live-train-status' }} style={{ flex: 1 }} />
      {load && <ActivityIndicator
          style={{ position: "absolute", top: Dimensions.get('window').height / 2, left: Dimensions.get('window').width / 2 }}
          size="large"
        />}
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ரயில்கள்" component={HomeScreen} options={{
          tabBarIcon: ({ size, color }) =>
            <MaterialCommunityIcons name="train" size={size} color={color} />,
        }} />
      <Tab.Screen name="பெட்டிகள்" component={SettingsScreen} options={{
          tabBarIcon: ({ size, color }) =>
            <FontAwesome5 name="boxes" size={size} color={color} />,
        }} />
        <Tab.Screen name="நேரலை" component={TrackingScreen} options={{
          tabBarIcon: ({ size, color }) =>
            <MaterialCommunityIcons name="google-maps" size={size} color={color} />,
        }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}