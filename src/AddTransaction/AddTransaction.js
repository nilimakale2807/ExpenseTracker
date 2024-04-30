import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import DateControl from '../Common/DateControl';
import Categories from './Categories';
import { addTransaction } from '../Redux/Slice/AddTransaction/addTransactionSlice';
import { addTransactionstyles as styles } from './AddTransactionStyle';

const AddTransaction = () => {
    const [amount, setAmount] = useState(0);
    const [notes, setNotes] = useState('');
    const [category, setCategory] = useState({});
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
        if (Object.keys(category).length > 0 && amount) {
            const transaction = {
                category: category,
                date: date || new Date().toLocaleDateString(),
                notes: notes,
                amount: amount,
                type: 'expense'
            }
            dispatch(addTransaction(transaction));
            navigation.navigate('Dashboard')
        }
        else {
            basicValidation();
        }
    }

    const basicValidation = () => {
        if (Object.keys(category).length === 0 && !amount) {
            Alert.alert("Please enter amount and category");
        }
        else if (!amount) {
            Alert.alert("Please enter amount");
        }
        else if (Object.keys(category).length === 0) {
            Alert.alert("Please enter category");
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

    const getSelectedCategory = (selectedCategory) => {
        setCategory(selectedCategory);
    }

    const getSelectedDate = (selectedDate) => {
        setDate(selectedDate.toLocaleDateString());
    }

    return (
        <>
            {loadTextInput()}
            <Categories getCategory={(category) => getSelectedCategory(category)} />
            <DateControl getDate={(date) => { getSelectedDate(date) }} />
            {loadMultiLineInput()}
            {saveTransactionButton()}
        </>
    )
}

export default AddTransaction;