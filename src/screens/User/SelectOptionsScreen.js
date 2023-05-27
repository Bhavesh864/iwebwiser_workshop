import { Alert, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { flexRow, width } from '../../styles/CommonStyling'
import { colors } from '../../styles/colors'
import { CheckedSvgComponent, WelcomeScreenSvg } from '../../assets/svg/AppSvg'
import { AppText } from '../../utility/TextUtility'
import { InputField, TouchableTextView } from '../../components/Custom/CustomFields'
import { SpacerVertical } from '../../utility/Spacer'
import { navigate } from '../../route/RootNavigation'
import { AppConstant, questionsArr } from '../../constants/AppConstant'
import { AppToastMessage } from '../../constants/SnakeBar'
import { GetLanguageCategories, LogOutAction, getQuestinaries, startExamWithSelectedLang } from '../../store/actions/UserAction'
import { useDispatch, useSelector } from 'react-redux'
import LogoutModal from '../../components/Modals/LogoutModal'

const SelectOptionsScreen = () => {
  const userData = useSelector(state => state.user?.user);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [languageArr, setlanguageArr] = useState([]);
  const [showLogoutModal, setshowLogoutModal] = useState(false);

  useEffect(() => {
    console.log('SelectOptSCreen', AppConstant.userId);
    GetLanguageCategories().then(res => {
      if (res?.status) {
        setlanguageArr(res?.category)
      }
    }).catch(err => {
      console.log(err);
    });
  }, []);


  const convertToUpperCase = (item) => {
    if (item == 'javascript') {
      return `${item.charAt(0).toUpperCase()}${item.slice(1)}`;
    }
    else {
      return item.toUpperCase();
    }
  }


  const onLogoutPress = () => {
    setshowLogoutModal(true);
    // Alert.alert(
    //   'Do you want to logout?',
    //   '',
    //   [
    //     {
    //       text: "Cancel",
    //       onPress: () => console.log("Cancel Pressed"),
    //       style: "cancel"
    //     },
    //     {
    //       text: "Logout",
    //       onPress: () => {
    //         LogOutAction().then(res => {
    //           console.log(res);
    //         }).catch(err => {
    //           console.log(err);
    //         });
    //       },
    //       style: "default"
    //     },
    //   ]
    // )
    // return;
  }

  const onPressStartQuestionaries = () => {
    if (!selectedLanguage) {
      AppToastMessage('Please select a language to continue!');
      return;
    }
    const data = {
      categoryId: selectedLanguage.id
    };

    startExamWithSelectedLang(data).then(res => {
      if (res?.status) {
        getQuestinaries(selectedLanguage.id)
          .then(res => {
            if (res?.status) {
              if (res?.question.length > 0) {
                navigate('Questions', { title: convertToUpperCase(selectedLanguage.name), questionsData: res?.question });
              } else {
                AppToastMessage('This field is not available for now!')
              }
            }
          })
          .catch(err => {
            console.log('Ques Error', err);
          })
      }
    }).catch(err => {
      console.log(err);
    })

  }


  return (
    <View style={{ flex: 1 }}>

      <View style={styles.logOutBar}>
        <AppText text={`Hi, ${userData?.user.name}`} size={20} color='black' />
        <TouchableOpacity style={styles.btn} onPress={onLogoutPress}>
          <AppText
            text='Logout'
            size={20}
            color={colors.primary}
            style={{ fontWeight: 'bold' }}

          />
        </TouchableOpacity>
      </View>

      <View style={{ marginHorizontal: 20, flex: 1, marginTop: 15 }}>
        <ScrollView style={{ flex: 1 }}>
          <View style={{ alignItems: 'center', marginTop: 20, marginBottom: 25 }}>
            <AppText text='Welcome to' size={16} color='grey' />
            <AppText text='iWebwiser Workshop 2023' size={20} color='black' />
          </View>

          <View style={{ alignItems: 'center', width: width, marginBottom: 30 }}>
            <WelcomeScreenSvg />
          </View>
          <SpacerVertical marginVertical={15}>
            <AppText text='Select Your Language' size={20} color='black' />
          </SpacerVertical>

          {languageArr.map((item, index) => {
            return <InputField
              key={index}
              editable={false}
              value={convertToUpperCase(item.name)}
              showIcon={selectedLanguage == item ? <CheckedSvgComponent /> : false}
              onPress={() => {
                setSelectedLanguage(item);
              }}
              style={selectedLanguage == item && { borderColor: colors.primary, borderWidth: 2 }}
            />
          })}

        </ScrollView>
        <TouchableTextView value={'Start Questionaries'} onPress={onPressStartQuestionaries} />
      </View>
      {showLogoutModal && <LogoutModal
        close={() => {
          setshowLogoutModal(false)
        }}
        submit={() => {
          LogOutAction().then(res => {
            console.log(res);
          }).catch(err => {
            console.log(err);
          });
        }}
      />
      }
    </View>
  )
}

export default SelectOptionsScreen

const styles = StyleSheet.create({
  logOutBar: {
    ...flexRow,
    backgroundColor: colors.lightGrey,
    borderRadius: 5,
    padding: 10,
    justifyContent: 'space-between'
  }
})