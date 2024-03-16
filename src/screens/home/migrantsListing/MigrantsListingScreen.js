import { useTheme } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import { View, FlatList, TouchableOpacity, Text, Alert } from 'react-native';
import { mobileStyles } from './styles';
import HeaderBar from '../../../components/core/HeaderBar';
import NavigationService from '../../../utils/NavigationService';
import ApiService from '../../../apiManager/ApiService';
import { useDispatch } from 'react-redux';
import { loaderBegin, loaderEnd } from '../../../redux/slices/loader/LoaderSlice';
import NoRecordFound from '../../../components/core/NoRecordFound';
import { ResizeValue } from '../../../theme/styles';
import CustomRefreshControl from '../../../components/core/CustomRefreshControl';
import MigrantListItem from './MigrantListItem';
import SearchBar from '../../../components/core/SearchBar';

const MigrantsListingScreen = ({ props, navigation, route }) => {
    const { colors } = useTheme();
    const styles = mobileStyles(colors);
    const [currentPage, setCurrentPage] = React.useState(1)
    const [search, setSearch] = React.useState("");
    const [arrMigrants, setMigrants] = React.useState({
        arrMigrantListing: [],
        totalDocs: 0,
        hasNextPage: false,
    });
    const dispatch = useDispatch()

    useEffect(() => {
        getMigrantsLifeAPI(1, "")
    }, [dispatch]);

    //MARK:- API Request Calling
    const getMigrantsLifeAPI = async (currentPage, searchKeyword) => {
        dispatch(loaderBegin());
        let apiURL = `migrants-life/get?page=${currentPage}&limit=${10}`
        if (searchKeyword !== "") {
            apiURL += `&search=${searchKeyword}`;
        }
        const response = await ApiService.get(apiURL, null, null, false);
        dispatch(loaderEnd());
        if (response.status === 200) {
            let responseData = response.data.data
            if (currentPage == 1) {
                setMigrants({
                    arrMigrantListing: responseData.docs,
                    totalDocs: responseData.totalDocs,
                    hasNextPage: responseData.hasNextPage,
                })
            } else {
                setMigrants({
                    arrMigrantListing: [...arrMigrants.arrMigrantListing, ...responseData.docs],
                    totalDocs: responseData.totalDocs,
                    hasNextPage: responseData.hasNextPage,
                })
            }
            return;
        }
    }

    const renderMigrantsListingListItem = ({ item, index }) => (
        <MigrantListItem
            item={item}
            index={index}
            onPressItem={item => {
                NavigationService.navigate(navigation, "MigrantsDetailScreen", {
                    dictMigrantsDetails: item
                })
            }}
        />
    );

    return (
        <View style={styles.mainContainer}>
            <HeaderBar navigation={navigation} isShowHeaderAppImage={true} />
            <View style={styles.searchBarContainerStyle}>
                <SearchBar
                    onChangeValue={(text) => setSearch(text)}
                    placeholder={'Search by Text'}
                    containerStyle={styles.searchBarStyle}
                    value={search}
                />
                <TouchableOpacity style={styles.filterButtonContainerStyle} onPress={() => {
                    setCurrentPage(1)
                    if (!search || search === '') {
                        getMigrantsLifeAPI(1, "")
                    } else {
                        getMigrantsLifeAPI(1, search)
                    }
                }}>
                    <Text style={styles.filterTextStyle}>Search</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.subContainerStyle}>
                {
                    arrMigrants.arrMigrantListing.length > 0 ?
                        <FlatList
                            style={{ marginHorizontal: ResizeValue(8) }}
                            data={arrMigrants.arrMigrantListing}
                            renderItem={renderMigrantsListingListItem}
                            showsVerticalScrollIndicator={false}
                            numColumns={2}
                            initialNumToRender={5}
                            onEndReachedThreshold={0.2}
                            key={"_"}
                            keyExtractor={(item, index) => "_" + index}
                            columnWrapperStyle={{ justifyContent: 'space-between' }}
                            extraData={arrMigrants.arrMigrantListing}
                            refreshControl={
                                <CustomRefreshControl
                                    refreshing={false}
                                    onRefresh={() => {
                                        setCurrentPage(1)
                                        getMigrantsLifeAPI(1, search)
                                    }}>
                                </CustomRefreshControl>
                            }
                            onEndReached={({ distanceFromEnd }) => {
                                if ((arrMigrants.arrMigrantListing.length <= arrMigrants.totalDocs) && arrMigrants.hasNextPage) {
                                    let newCurrentPage = currentPage + 1
                                    setCurrentPage(newCurrentPage)
                                    getMigrantsLifeAPI(newCurrentPage, search)
                                }
                            }}
                        />
                        :
                        <NoRecordFound
                            containerStyle={{ flex: 1 }}
                            parentText={"No stories found"}
                        />
                }

            </View>
        </View>
    );
};

export default MigrantsListingScreen;
