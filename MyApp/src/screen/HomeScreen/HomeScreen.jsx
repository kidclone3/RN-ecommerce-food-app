import { View, Text, FlatList} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import ProductItem from '../../components/ProductItem';
import { Button, Icon, Image, SearchBar } from '@rneui/themed';
import HomeHeader from '../../components/Header/HomeHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import { icons, images, SIZES, COLORS, FONTS } from '../../constants';
import styles from './styles';
import CategoriesButton from '../../components/CategoriesButton';
import { getCategories } from '../../services/categories';
import { getProducts } from '../../services/products';
import { Dialog } from '@rneui/themed';

const HomeScreen = ({ navigation }) => {
    const [search, setSearch] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    function searchBar() {
        return (
            <SearchBar
                round
                lightTheme
                platform="ios"
                cancelIcon={{ type: 'font-awesome', name: 'chevron-left' }}
                showLoading={search.length > 0}
                placeholder="What are you craving?"
                containerStyle={styles.searchBar}
                inputContainerStyle={styles.searchBarInput}
                onChangeText={() => navigation.push('SearchScreen')}
            />
        );
    }

    function renderMainCatagories() {
        const [categories, setCategories] = useState([]);

        let loaded = true;
        useEffect(() => {
            setLoading(true);
            getCategories()
                .then((res) => {
                    if (loaded) {
                        setCategories(res);
                    }
                    console.warn(JSON.stringify(categories));
                })
                .catch((err) => {
                    console.log(err);
                });
            setLoading(false);
            return () => {
                loaded = false;
            };
        }, []);

        function catagoriesHeader() {
            return (
                <View style={styles.header}>
                    <Text style={{ ...FONTS.h1 }}>Main</Text>
                    <Text style={{ ...FONTS.h1 }}>Categories</Text>
                </View>
            );
        }
        return (
            loading ? <Dialog.Loading/> : (
            <View>
                <FlatList
                    bounces={true}
                    ListHeaderComponent={catagoriesHeader}
                    scrollEnabled={false}
                    showsHorizontalScrollIndicator={false}
                    data={categories}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={({ item }) => (
                        <CategoriesButton
                            name={item.attributes.name}
                            icon={item.attributes.icon.data.attributes.url}
                            action={() => {
                                console.warn(item.id);
                            }}
                            itemPerRows={4}
                            direction={'column'}
                        />
                    )}
                    containerStyle={styles.flatList}
                    numColumns={4}
                />
            </View>
            )
        );
    }
    function renderProductList() {
        const [data, setData] = useState([]);
        let loaded = true;
        useEffect(() => {
            setLoading(true);
            getProducts().then((res) => {
                if (loaded) {
                    setData(res.data);
                }
                // console.warn(JSON.stringify(data));
                // console.warn(data.length())
            });
            setLoading(false);
            return () => {
                loaded = false;
            };
        }, []);
        const renderItem = ({ item }) => {
            return (
                <ProductItem
                    itemId={item.id}
                    itemName={item.attributes.name}
                    itemPrice={item.attributes.price}
                    itemImage={
                        item.attributes.image.data[0].attributes.url
                    }
                />
            );
        };
        return (
            loading ? <Dialog.Loading/> :(
            <View>
                <View style={styles.header}>
                    <Text style={{ ...FONTS.h1 }}>Recommend for you!</Text>
                </View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data.filter((item) => item.attributes.show)}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{
                        paddingVertical: SIZES.padding * 2,
                        padding: SIZES.padding * 2,
                    }}
                />
            </View>)
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <HomeHeader />
            <ScrollView>
                {searchBar()}
                {renderMainCatagories()}
                {renderProductList()}
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;
