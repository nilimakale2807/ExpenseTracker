import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import TransactionHistory from './TransactionHistory';
import TotalBalance from './TotalBalance';
import { dashboardStyles as styles } from './DashboardStyle';

const Dashboard = () => {
    const navigation = useNavigation();

    navigateToAddTransaction = () => {
        navigation.navigate('AddTransaction')
    }

    navigateToAddIncome = () => {
        navigation.navigate('AddIncome')
    }

    const loadButtons = () => {
        return (
            <View style={styles.buttonContainer}>
                <Button
                    mode="contained"
                    onPress={() => navigateToAddTransaction()}
                    style={styles.width100PercentButton}
                >
                    Add Transaction
                </Button>

                <Button
                    mode="contained"
                    onPress={() => navigateToAddIncome()}
                    style={styles.width100PercentButton}
                >
                    Add Income
                </Button>
            </View>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <TotalBalance />
            {loadButtons()}
            <TransactionHistory />
        </View>)
}

export default Dashboard;