//botoms tabs movido a app con el stack navigation



// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Foundation } from "@expo/vector-icons";

// import HomeScreen from "../screens/HomeScreen";
// import FaltaPorDefinirScreen from "../screens/FaltaPorDefinirScreen";
// import UserFavoriteScreen from "../screens/UserFavoriteScreen";
// import UserProfileScreen from "../screens/UserProfileScreen";
// import COLORS from "../styles/colors";

// const Tab = createBottomTabNavigator();

// //agregar bottom tabs a la navegacion principal

// export default function BottomTabs() {
//     const tabBarIconConfig = {
//         HomeScreen: {
//             iconName: "home",
//             component: ({ color, size }) => (
//                 <Foundation name="home" size={size} color={color} />
//             ),
//         },
//         FaltaPorDefinirScreen: {
//             iconName: "foot",
//             component: ({ color, size }) => (
//                 <Foundation name="foot" size={size} color={color} />
//             ),
//         },
//         UserFavoriteScreen: {
//             iconName: "heart",
//             component: ({ color, size }) => (
//                 <Foundation name="heart" size={size} color={color} />
//             ),
//         },
//         UserProfileScreen: {
//             iconName: "torso",
//             component: ({ color, size }) => (
//                 <Foundation name="torso" size={size} color={color} />
//             ),
//         },
//     };
//     return (
//         <>
//             <Tab.Navigator
//                 sty
//                 screenOptions={({ route }) => ({
//                     tabBarIcon: ({ color }) =>
//                         tabBarIconConfig[route.name].component({ color, size: 24 }),
//                     tabBarShowLabel: false,
//                     headerShown: false,

//                     tabBarStyle: {
//                         backgroundColor: "#FBFBFB",
//                         position: "absolute",
//                         borderTopLeftRadius: 20,
//                         borderTopRightRadius: 20,
//                         margin: 1,
//                         height: 50,
//                     },
//                     tabBarActiveTintColor: COLORS.primary,
//                     tabBarInactiveTintColor: "gray",
//                 })}
//             >
//                 <Tab.Screen name="HomeScreen" component={HomeScreen} />
//                 <Tab.Screen
//                     name="FaltaPorDefinirScreen"
//                     component={FaltaPorDefinirScreen}
//                 />
//                 <Tab.Screen name="UserFavoriteScreen" component={UserFavoriteScreen} />
//                 <Tab.Screen name="UserProfileScreen" component={UserProfileScreen} />
//             </Tab.Navigator>
//         </>
//     );
// }
