import React, { useEffect } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { registerRootComponent } from 'expo';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import HomeScreen from './HomeScreen';
import SettingScreen from './SettingScreen';
import { StatusBar } from 'react-native';

const Drawer = createDrawerNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#16171d', // 전체 배경색
    card: '#16171d', // 네비게이션 바 색상
    text: 'white', // 텍스트 색상
  },
};

function App() {
  const [fontsLoaded] = useFonts({
    'KBO-Dia-Gothic_bold': require('./assets/fonts/KBO-Dia-Gothic_bold.ttf'),
    'KBO-Dia-Gothic_light': require('./assets/fonts/KBO-Dia-Gothic_light.ttf'),
    'KBO-Dia-Gothic_medium': require('./assets/fonts/KBO-Dia-Gothic_medium.ttf'),
  });

  useEffect(() => {
    SplashScreen.preventAutoHideAsync(); // 스플래시 화면 표시 유지
  }, []);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync(); // 폰트 로드 완료 후 스플래시 화면 숨기기
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // 폰트가 로드될 때까지 아무것도 렌더링하지 않음
  }

  return (
    // <NavigationContainer theme={MyTheme}>
    //   <Drawer.Navigator
    //     initialRouteName="Home"
    //     screenOptions={{
    //       headerStyle: { backgroundColor: '#16171d' },
    //       headerTintColor: 'white',
    //     }}
    //   >
    //     <Drawer.Screen name="Home" component={HomeScreen} />
    //     <Drawer.Screen name="Settings" component={SettingScreen} />
    //   </Drawer.Navigator>
    // </NavigationContainer>
    <NavigationContainer theme={MyTheme}>
      <StatusBar auto/>
      <SettingScreen/>
    </NavigationContainer>
  );
}

registerRootComponent(App);

export default App;
