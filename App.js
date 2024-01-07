import { StatusBar } from 'expo-status-bar';
import { ScaledSheet } from 'react-native-size-matters';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import COLORS from './styles/colors';


//imports bottoTabs
import HomeScreen from './screens/HomeScreen';
import FaltaPorDefinirScreen from './screens/FaltaPorDefinirScreen';
import UserFavoriteScreen from './screens/UserFavoriteScreen';
import UserProfileScreen from './screens/UserProfileScreen';

//import Stack.screen
import HomeLoginScreen from './screens/HomeLoginScreen';
import Register from './authentication/Register';
import Login from './authentication/Login';
import ForgotPassword from './authentication/ForgotPassword';
import EstablishmentScreen from './screens/EstablishmentScreen'
import CardProduct from './components/CardProduct';
import BlogPost from './screens/BlogPost';
import CalendarScreen from './screens/CalendarScreen';
import ReserveConfirmationScreen from './screens/ReserveConfirmationScreen';
import PaymentScreen from './screens/PaymentScreen';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator()



function BottomTabNavigatior() {
  return (
    <BottomTabs.Navigator screenOptions={{
      tabBarStyle: styles.tabBar,
      backgroundColor: 'transparent',
      tabBarActiveTintColor: COLORS.primary,
      headerStyle: { backgroundColor: COLORS.primary },
      headerTintColor: 'white',
    }}>
      <BottomTabs.Screen name='HomeScreen' component={HomeScreen} options={{
        title: 'Home',
        tabBarLabel: 'Home',
        headerShown: false,
        tabBarIcon: ({ color, size }) => (<Ionicons name="home" size={size} color={color} />)
      }}
      />
      <BottomTabs.Screen name='FaltaPorDefinirScreen' component={FaltaPorDefinirScreen} options={{
        title: 'Travel',
        tabBarLabel: 'Vacation',
        tabBarIcon: ({ color, size }) => (<Ionicons name="airplane" size={size} color={color} />)
      }} />
      <BottomTabs.Screen name='UserFavoriteScreen' component={UserFavoriteScreen} options={{
        title: 'Favorite',
        tabBarLabel: 'Favorite',
        tabBarIcon: ({ color, size }) => (<Ionicons name="heart" size={size} color={color} />)
      }} />
      <BottomTabs.Screen name='UserProfileScreen' component={UserProfileScreen} options={{
        title: 'User',
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (<Ionicons name="body-sharp" size={size} color={color} />)
      }} />
    </BottomTabs.Navigator>
  )
}

const styles = ScaledSheet.create({
  tabBar: {
    width: '375@ms',
    height: '58@vs',
    borderRadius: '32@s',
    elevation: '4@s',
  }
})

export default function App() {

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='HomeLoginScreen'>
          <Stack.Screen name="HomeLoginScreen" component={HomeLoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
          <Stack.Screen
            name="BottomTabNavigatior"
            component={BottomTabNavigatior}
            options={{ headerShown: false }}
          />
          <Stack.Screen name='CardProduct' component={CardProduct} options={{ headerShown: false }} />
          <Stack.Screen name='EstablishmentScreen' component={EstablishmentScreen} options={{ headerShown: false }} />
          <Stack.Screen name='BlogPost' component={BlogPost} options={{ headerShown: false }} />
          <Stack.Screen name='CalendarScreen' component={CalendarScreen} options={{ headerShown: false }} />
          <Stack.Screen name='PaymentScreen' component={PaymentScreen} options={{ headerShown: false }} />
          <Stack.Screen name='ReserveConfirmationScreen' component={ReserveConfirmationScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>

  );
}

