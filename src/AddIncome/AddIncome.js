import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import DateControl from '../Common/DateControl';
import { incomeStyles as styles } from './AddIncomeStyle';
import { addTransaction } from '../Redux/Slice/AddTransaction/addTransactionSlice';

const AddTransaction = () => {
    const [amount, setAmount] = useState(0);
    const [notes, setNotes] = useState('');
    const [date, setDate] = useState(new Date().toLocaleDateString());

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const onChangeText = (value) => {
        if (!isNaN(value) || value == "") {
            setAmount(value);
        }
    };

    const loadTextInput = () => {
        return (<View
            style={{
                marginVertical: 10,
                flexDirection: 'row',
                justifyContent: 'center',
            }}>
            <TextInput
                value={amount}
                style={styles.amountField}
                autoFocus={true}
                placeholder="INR"
                keyboardType="numeric"
                onChangeText={onChangeText}
            />
        </View>)
    }

    const loadMultiLineInput = () => {
        return (
            <TextInput
                mode="outlined"
                label="Add Notes"
                multiline
                style={styles.textArea}
                value={notes}
                onChangeText={(text) => setNotes(text)}
            />
        )
    }

    const saveTransaction = () => {
        if (amount && amount > 0) {
            const transaction = {
                date: date || new Date().toLocaleDateString(),
                notes: notes,
                amount: amount,
                type: 'income'
            }
            dispatch(addTransaction(transaction));
            navigation.navigate('Dashboard')
        }
        else {
            Alert.alert("Please enter amount");
        }
    }

    const saveTransactionButton = () => {
        return (
            <View style={{ marginHorizontal: 8 }}>
                <Button
                    mode="contained"
                    onPress={() => saveTransaction()}
                    style={styles.width100PercentButton}
                >
                    Save
                </Button>
            </View>
        )
    }

    const getSelectedDate = (selectedDate) => {
        setDate(selectedDate.toLocaleDateString());
    }

    return (
        <>
            {loadTextInput()}
            <DateControl getDate={(date) => { getSelectedDate(date) }} />
            {loadMultiLineInput()}
            {saveTransactionButton()}
        </>
    )
}

export default AddTransaction;
