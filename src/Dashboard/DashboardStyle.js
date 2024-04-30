import { StyleSheet } from 'react-native'

export const dashboardStyles = StyleSheet.create({
    width100PercentButton: {
        width: '100%',
        marginTop: 10,
        paddingHorizontal: 24
    },
    buttonContainer: {
        alignItems: 'center',
        backgroundColor: '#fff',
        marginHorizontal: 10,
        marginTop: 15,
        borderRadius: 10,
        paddingHorizontal: 24,
        paddingBottom: 16
    }
});

export const balanceStyles = StyleSheet.create({
    content: {
        alignItems: 'center',
        marginHorizontal: 10,
        backgroundColor: "white",
    },
    pieChartView: {
        flex: 1, width: 200, height: 200
    }
});

export const transactionHistorStyles = StyleSheet.create({
    container: {
        ackgroundColor: '#eee', 
        justifyContent: 'space-around', 
        flexDirection: 'row', 
        flex: 1, 
        borderRadius: 10,
        margin: 8
    },
    transactionHistory: {
        borderWidth: 1, 
        borderColor: '#eee', 
        padding: 8, 
        borderRadius: 4, 
        height: 60, 
        alignContent: 'center', 
        backgroundColor: 'white', 
        marginBottom: 8
    },
    transaction: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        alignItems: 'center'
    },
    notes: {
        marginLeft: 20, 
        flexDirection: 'row'
    },
    caption: {
        fontStyle: 'italic', 
        marginLeft: 8
    },
    row: {
        flexDirection: 'row',
    },
    column: {
        flexDirection: 'column',
    },
    customTitle: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    additionalPadding: {
        paddingTop: 8,
    },
});