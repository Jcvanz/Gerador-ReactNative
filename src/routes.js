import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./pages/home";
import { Passwords } from "./pages/passwords";
import { Ionicons } from '@expo/vector-icons';

// CONFIGURAÇÃO DAS ROTAS
const Tab = createBottomTabNavigator();
export function Routes() {
    return(
        <Tab.Navigator>

            {/* ICONE DE HOME DO MENU */}
            <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({focused, size, color}) => {
                        if(focused) {
                            return <Ionicons size={size} color={color} name="home"/>
                        }
                        return <Ionicons size={size} color={color} name="home-outline"/>
                    }
                }}
            />

            {/* ICONE DE SENHA DO MENU */}
            <Tab.Screen 
                name="Passwords" 
                component={Passwords} 
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({focused, size, color}) => {
                        if(focused) {
                            return <Ionicons size={size} color={color} name="lock-closed"/>
                        }
                        return <Ionicons size={size} color={color} name="lock-closed-outline"/>
                    }
                }}
            />
        </Tab.Navigator>
    );
}