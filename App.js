import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


//imports bottoTabs
import HomeScreen from './screens/HomeScreen';
import FaltaPorDefinirScreen from './screens/FaltaPorDefinirScreen';
import UserFavoriteScreen from './screens/UserFavoriteScreen';
import UserProfileScreen from './screens/UserProfileScreen';

//import Stack.screen
import Register from './authentication/Register';
import Login from './authentication/Login';
import ForgotPassword from './authentication/ForgotPassword';
import EstablishmentScreen from './screens/EstablishmentScreen'
import CardProduct from './components/CardProduct';
import BlogPost from './screens/BlogPost';
import CalendarScreen from './screens/CalendarScreen';
import ReserveConfirmationScreen from './screens/ReserveConfirmationScreen';
import COLORS from './styles/colors';


const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator()


function BottomTabNavigatior() {
  return (<BottomTabs.Navigator screenOptions={{
    tabBarActiveTintColor: COLORS.primary,
    headerStyle: { backgroundColor: COLORS.primary },
    headerTintColor: 'white'
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
  </BottomTabs.Navigator>)
}

export default function App() {

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Register'>
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen
            name="BottomTabNavigatior"
            component={BottomTabNavigatior}
            options={{ headerShown: false }}
          />
          <Stack.Screen name='CardProduct' component={CardProduct} options={{ headerShown: false }} />
          <Stack.Screen name='EstablishmentScreen' component={EstablishmentScreen} options={{ headerShown: false }} />
          <Stack.Screen name='BlogPost' component={BlogPost} options={{ headerShown: false }} />
          <Stack.Screen name='CalendarScreen' component={CalendarScreen} options={{ headerShown: false }} />
          <Stack.Screen name='ReserveConfirmationScreen' component={ReserveConfirmationScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
      <StatusBar style="auto" />
    </>

  );
}

