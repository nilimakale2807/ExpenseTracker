import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { TextInput, Chip } from 'react-native-paper';
import DatePicker from 'react-native-date-picker';
import { dateControlStyles as styles } from './DateControlStyle';


const DateControl = ({ getDate }) => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    const inputActionHandler = () => {
        setOpen(true)
    }

    const loadDateControl = () => {
        return (
            <>
                <View style={styles.container}>
                    <Text style={{ marginTop: 10, textAlign: 'flex-start' }}>
                        Select Date
                    </Text>
                    <Chip
                        mode="outlined"
                        onPress={() => inputActionHandler()}
                        compact
                        avatar={
                            <Image
                                source={require('../Assets/images/calendar.png')}
                            />
                        }
                        style={[styles.chip]}
                    >
                        {date.toLocaleDateString()}
                    </Chip>
                    <DatePicker
                        modal
                        open={open}
                        date={date}
                        onConfirm={(date) => {
                            setOpen(false);
                            setDate(date);
                            getDate(date);
                        }}
                        onCancel={() => {
                            setOpen(false)
                        }}
                        mode='date'
                        maximumDate={new Date()}
                    />
                </View>
            </>
        )
    }

    return (
        <>
            {loadDateControl()}
        </>
    )
}
export default DateControl;