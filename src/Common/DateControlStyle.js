import { StyleSheet } from 'react-native'

export const dateControlStyles = StyleSheet.create({
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
    year: {
        flex: 1,
        marginLeft: 4,
    },
    textArea: {
        height: 20,
        marginTop: 16,
        marginHorizontal: 12
    },
    chip: {
        margin: 4,
        width: 300,
        height: 40
    },
    container: {
        backgroundColor: '#fff',
        marginHorizontal: 14,
        marginTop: 15,
        borderRadius: 10,
        paddingHorizontal: 8
    }
});