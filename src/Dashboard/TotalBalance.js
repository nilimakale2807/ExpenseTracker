import React, { useEffect } from 'react';
import { View, Text,processColor, Image } from 'react-native';
import { Headline } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { PieChart } from 'react-native-charts-wrapper'
import { balanceStyles as styles } from './DashboardStyle';
import { getBalance } from '../Redux/Slice/AddTransaction/addTransactionSlice';

const TotalBalance = () => {
    const transactions = useSelector(state => state.transactions.transaction);
    const { balance, expense, income } = useSelector(state => state.transactions);
    const dispatch = useDispatch();
    const data = {
        dataSets: [{
            values: [{ value: Number(income) },
            { value: Number(expense) },
            { value: Number(balance) },],
            config: {
                colors: [processColor('#90EE90'), processColor('#FFCCCB'), processColor('#48D1CC')],
                valueTextSize: 14,
                valueTextColor: processColor('black'),
                sliceSpace: 5,
                selectionShift: 13,
                valueFormatter: "#.#'%'",
                valueLineColor: processColor('green'),
                valueLinePart1Length: 0.5
            },
            label: ""
        }],
    }
    const legend = {
        enabled: false,
        textSize: 13,
        form: 'NONE'
    }

    useEffect(() => {
        dispatch(getBalance());
    }, [transactions])

    const loadPieChart = () => {
        return (
            <View style={styles.pieChartView}>
                <PieChart
                    style={{ flex: 1 }}
                    logEnabled={true}
                    data={data}
                    legend={legend}
                    extraOffsets={{ left: 0, top: -10, right: 0, bottom: 0 }}
                    entryLabelTextSize={14}
                    entryLabelFontFamily={'HelveticaNeue-Medium'}
                    drawEntryLabels={true}
                    rotationEnabled={true}
                    rotationAngle={45}
                    usePercentValues={true}
                    styledCenterText={{ text: '' + Number(balance), color: processColor('black'), size: 14 }}
                    centerTextRadiusPercent={100}
                    holeRadius={40}
                    holeColor={processColor('#f0f0f0')}
                    transparentCircleRadius={45}
                    transparentCircleColor={processColor('#f0f0f088')}
                    maxAngle={360}
                />
            </View>
        )
    }

    const emptyTransactionView = () => {
        return (
            <>
             <Text style={{ marginBottom: 16 }}>
                Add your trasnasactions and income.
            </Text>
            <Image 
            source={require('../Assets/images/transaction.png')}
            style={{height:100, width:100, margin: 10}}
            />
            </>
           
        )
    }

    const loadBalance = () => {
        return (
            <View style={{ backgroundColor: "white", margin: 14 }}>
                <Headline variant="displayMedium">Current balance: {balance}</Headline>
            </View>
        )
    }

    return (
        <View style={[styles.content, { flex: balance  ? 1 : 0 }]}>
            {loadBalance()}
            {balance === 0 && expense === 0 && income === 0 ?
                emptyTransactionView()
                : loadPieChart()
            }
        </View>
    )
}

export default TotalBalance;
