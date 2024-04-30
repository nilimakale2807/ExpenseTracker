import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { categoriesStyles as styles } from './AddTransactionStyle';
import { addCatgory } from '../Redux/Slice/AddTransaction/addTransactionSlice';

const Categories = ({ getCategory }) => {
    const [categoryId, setCategoryId] = useState(null);
    const [name, setName] = useState('');
    const [addCategory, setAddCategory] = useState(false);

    const categories = useSelector(state => state.transactions.category);
    const dispatch = useDispatch();

    const lastCategoryId = categories[categories.length - 1];

    const setCategoryValue = (category) => {
        setCategoryId(category.id);
        getCategory(category);
    }

    const addCategories = () => {
        setAddCategory(true);
    }

    const saveCategories = () => {
        const newCategory = {
            title: name,
            id: lastCategoryId + 1
        }
        dispatch(addCatgory(newCategory))
        getCategory(newCategory);
        setAddCategory(false);
    }

    const renderCategories = () => {
        return (
            <FlatList
                numColumns={3}
                data={categories}
                keyExtractor={item => item.id}
                columnWrapperStyle={{ felx: 1, justifyContent: 'space-around' }}
                renderItem={({ item }) => (
                    <Button
                        mode="contained-tonal"
                        buttonColor={'white'}
                        onPress={() => setCategoryValue(item)}
                        style={[styles.button, categoryId === item.id && { backgroundColor: 'rgb(208, 188, 255)' }]}
                    >
                        {item.title}
                    </Button>
                )}
            />
        )
    }

    const loadCategories = () => {
        return (
            <View style={styles.categories}>
                <Text style={{ marginTop: 10, textAlign: 'flex-start' }}>
                    Categories
                </Text>
                <View>
                    {renderCategories()}

                    {addCategory ?
                        <>

                            <TextInput
                                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 8 }}
                                onChangeText={text => setName(text)}
                                value={name}
                                maxLength={10}
                                placeholder="Enter Category"
                            />
                            <Button
                                mode="contained"
                                onPress={() => saveCategories()}
                                style={styles.width100PercentButton}
                            >
                                Save
                            </Button>
                        </> :
                        <Button
                            mode="contained"
                            onPress={() => addCategories()}
                            style={styles.width100PercentButton}
                        >
                            Add Categories
                        </Button>
                    }
                </View>
            </View>
        )
    }

    return (
        <>
            {loadCategories()}
        </>
    )
}
export default Categories;
