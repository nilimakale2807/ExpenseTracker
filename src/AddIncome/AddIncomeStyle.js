import { StyleSheet } from 'react-native'

export const incomeStyles = StyleSheet.create({
    heading: {
        fontSize: 18,
        marginBottom: 5,
        fontWeight: '500',
    },
    amountField: {
        backgroundColor: '#fff',
        width: 200,
        borderBottomWidth: 2,
        fontSize: 20,
        textAlign: 'center',
    },
    width100PercentButton: {
        width: '100%',
        marginTop: 10,
        paddingHorizontal: 24
    },
    button: {
        margin: 4,
        borderColor: 'blue',
        borderWidth: 1,
        marginHorizontal: 4
    },
    dateBoxes: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    dateBox: {
        width: 70,
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    textContainer: {
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 5,
    },
    textArea: {
        height: 100,
        marginTop: 12,
        marginHorizontal: 18,
    },
    saveButton: {
        width: '100%',
        marginTop: 10,
        marginHorizontal: 12,
    }
});