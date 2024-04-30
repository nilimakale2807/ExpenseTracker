import React from 'react';
import Login from './src/Login/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux'
import Dashboard from './src/Dashboard/Dashboard';
import AddTransaction from './src/AddTransaction/AddTransaction';
import AddIncome from './src/AddIncome/AddIncome';
import store from './src/Redux/store';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

const Stack = createNativeStackNavigator();

function App() {
    return <Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Dashboard" component={Dashboard} options={{ title: 'Dashboard', headerLeft: () => <></>, headerShown: true }} />
                <Stack.Screen name="AddTransaction" component={AddTransaction} options={{ title: 'Add Transaction', headerShown: true, headerBackTitleVisible: false }} />
                <Stack.Screen name="AddIncome" component={AddIncome} options={{ title: 'Add Income', headerShown: true, headerBackTitleVisible: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    </Provider>;
}
export default App;
