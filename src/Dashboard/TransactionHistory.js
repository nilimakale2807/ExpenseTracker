import React, { useEffect } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { Caption } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { getBalance } from '../Redux/Slice/AddTransaction/addTransactionSlice';
import { transactionHistorStyles as styles } from './DashboardStyle';

const TransactionHistory = () => {
    const transactions = useSelector(state => state.transactions.transaction);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBalance());
    }, [transactions])

    const loadTransaction = (item) => {
        return (
            <View style={styles.transaction}>
                <Text>INR {item?.amount.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}/-</Text>
                <Text>{item?.type === 'income' ? 'Income' : item?.category?.title}</Text>
                <Text>{item.date}</Text>
            </View>
        )
    }

    const loadNotes = (item) => {
        return (
            item?.notes && <View style={styles.notes}>
                <Image
                    source={require('../Assets/images/notes.png')}
                    style={{ height: 18, width: 18 }}
                />
                <Caption style={styles.caption}>{item?.notes}</Caption>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={transactions}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={[styles.transactionHistory, item?.type === 'expense' ? { backgroundColor: '#FFCCCB' } : { backgroundColor: '#90EE90' }]}>
                        {loadTransaction(item)}
                        {loadNotes(item)}
                    </View>
                )}
            />
        </View>
    )
}

export default TransactionHistory;
