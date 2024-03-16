import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Image, ScrollView, Text } from 'react-native';
import { mobileStyles } from './styles';
import HeaderBar from '../../../components/core/HeaderBar';
import images from '../../../assets/images';
import { UselessTextInput } from '../../../components/core/UselessTextInput';
import NavigationService from '../../../utils/NavigationService';
import PressableButton from '../../../components/core/PressableButton';
import { emailValidate, showSnackbar } from '../../../utils/CommonUtils';
import ApiService from '../../../apiManager/ApiService';
import { ResizeValue } from '../../../theme/styles';
import InputText from '../../../components/core/InputText';
import { PreviousNextView } from 'react-native-keyboard-manager';

const TheBookScreen = ({ props, navigation, route }) => {
    const { colors } = useTheme();
    const styles = mobileStyles(colors);
    const [userMigrantsDetails, setUserMigrantsDetails] = useState({
        userName: '',
        userEmail: '',
        userPhoneNo: '',
        aboutMigrantsStory: '',
        currentCountry: '',
        initialCountry: '',
    });

    const submitClicked = () => {
        if (userMigrantsDetails.userName === "" || userMigrantsDetails.userName === undefined) {
            showSnackbar("Please enter your name")
        }
        else if (userMigrantsDetails.userEmail === "" || userMigrantsDetails.userEmail === undefined) {
            showSnackbar("Please enter your e-mail")
        }
        else if (!emailValidate(userMigrantsDetails.userEmail)) {
            showSnackbar("Please enter your valid e-mail")
        }
        else if (userMigrantsDetails.userPhoneNo === "" || userMigrantsDetails.userPhoneNo === undefined) {
            showSnackbar("Please enter your mobile number")
        }
        else if (userMigrantsDetails.currentCountry === "" || userMigrantsDetails.currentCountry === undefined) {
            showSnackbar("Please enter current country")
        }
        else if (userMigrantsDetails.initialCountry === "" || userMigrantsDetails.initialCountry === undefined) {
            showSnackbar("Please enter initial country")
        }
        else if (userMigrantsDetails.aboutMigrantsStory === "" || userMigrantsDetails.aboutMigrantsStory === undefined) {
            showSnackbar("Please enter about your story")
        }
        else {
            callNewRequestAPI()
        }
    }

    const callNewRequestAPI = async () => {

        var dictParams = {
            "name": userMigrantsDetails.userName,
            "email": userMigrantsDetails.userEmail,
            "mobileNumber": userMigrantsDetails.userPhoneNo,
            "initialCountry": userMigrantsDetails.initialCountry,
            "currentCountry": userMigrantsDetails.currentCountry,
            "details": userMigrantsDetails.aboutMigrantsStory,
        }

        const response = await ApiService.post("other/migrants", {}, {}, dictParams);
        let statusCode = response.data.statusCode
        if (statusCode === 200) {
            showSnackbar("Your request has been sent.")
            NavigationService.goBack(navigation);
            setUserMigrantsDetails({
                userName: '',
                userEmail: '',
                userPhoneNo: '',
                aboutMigrantsStory: '',
                currentCountry: '',
                initialCountry: '',
            })
            return;
        }
    }

    return (
        <View style={styles.mainContainer}>
            <HeaderBar pageTitle={"The Book"} navigation={navigation} isShowWhiteFontColor={false} />
            <ScrollView keyboardShouldPersistTaps='handled' showsVerticalScrollIndicator={false} automaticallyAdjustKeyboardInsets={true} >
            <PreviousNextView>
                <View style={styles.subContainerStyle}>
                    <Image resizeMode='contain' source={images.imgHeaderBar} style={styles.appIconStyle} />
                    <Text style={styles.titleTextStyle}>This form registers your interest for the upcoming MIGRANTS LIFE book.{"\n\n"}We will reach out to you once we have finalised the details of the project</Text>
                    <View style={{ marginHorizontal: ResizeValue(20), marginTop: ResizeValue(10) }}>
                        <InputText
                            onTextChange={text => setUserMigrantsDetails({ ...userMigrantsDetails, userName: text })}
                            textValue={userMigrantsDetails.userName}
                            inputPlaceHolder={'Name'}
                            blurOnSubmit={false}
                            returnType="next"
                        />
                        <InputText
                            onTextChange={text => setUserMigrantsDetails({ ...userMigrantsDetails, userEmail: text })}
                            textValue={userMigrantsDetails.userEmail}
                            inputPlaceHolder={'E-mail'}
                            keyboardType={'email-address'}
                            blurOnSubmit={false}
                            returnType="next"
                            autoCapitalize='none'
                        />
                        <InputText
                            onTextChange={text => setUserMigrantsDetails({ ...userMigrantsDetails, userPhoneNo: text })}
                            textValue={userMigrantsDetails.userPhoneNo}
                            inputPlaceHolder={'Mobile Number'}
                            blurOnSubmit={false}
                            returnType="next"
                            keyboardType={'number-pad'}
                        />
                        <InputText
                            onTextChange={text => setUserMigrantsDetails({ ...userMigrantsDetails, currentCountry: text })}
                            textValue={userMigrantsDetails.currentCountry}
                            inputPlaceHolder={'Current Country'}
                            blurOnSubmit={false}
                            returnType="next"
                        />
                        <InputText
                            onTextChange={text => setUserMigrantsDetails({ ...userMigrantsDetails, initialCountry: text })}
                            textValue={userMigrantsDetails.initialCountry}
                            inputPlaceHolder={'Initial Country/Countries'}
                            blurOnSubmit={false}
                            returnType="next"
                        />
                        <View style={styles.feedbackTextFieldContainerStyle}>
                            <UselessTextInput
                                style={styles.feedbackTextFieldStyle}
                                placeholder="A little bit about your story"
                                selectionColor={colors.black}
                                placeholderTextColor={colors.textPlaceHolderColor}
                                multiline={true}
                                value={userMigrantsDetails.aboutMigrantsStory}
                                onChangeText={(text) => setUserMigrantsDetails({ ...userMigrantsDetails, aboutMigrantsStory: text })}
                            />
                        </View>
                    </View>
                    <PressableButton
                        onPress={() => submitClicked()}
                        style={styles.submitBtnContainerStyle}
                        buttonText={'Submit'}
                        textStyle={styles.submitTextStyle}
                    />
                </View>
                </PreviousNextView>
            </ScrollView>
        </View>
    );
};

export default TheBookScreen;
