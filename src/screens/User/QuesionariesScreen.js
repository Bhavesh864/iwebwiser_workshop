import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { flexRow, width } from '../../styles/CommonStyling'
import { AppText } from '../../utility/TextUtility'
import { TouchableTextView, getCounterValues } from '../../components/Custom/CustomFields'
import QuestionAndOptions from '../../components/User/QuestionAndOptions'
import { Timer } from 'react-native-stopwatch-timer';
import { AppToastMessage } from '../../constants/SnakeBar'
import { colors } from '../../styles/colors'
import { navigate, push, replace } from '../../route/RootNavigation'
import { submitResultsAction } from '../../store/actions/UserAction'
import { ScrollView } from 'react-native-gesture-handler'

const QuestionariesScreen = ({ route, navigation }) => {
    const questionData = route?.params?.questionsData;
    const ref = useRef();
    const [selectedAnswer, setselectedAnswer] = useState('');
    const [selectedOptionkey, setselectedOptionkey] = useState('');
    const [activeIndex, setActiveIndex] = useState(0);
    const [allFinalAnswers, setallFinalAnswers] = useState([]);
    const [minutes, setMinutes] = useState(15);
    const [seconds, setSeconds] = useState(0);


    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000)
        return () => {
            clearInterval(myInterval);
        };
    }, [seconds]);


    const saveAnswerLocally = (isNext) => {
        setallFinalAnswers([...allFinalAnswers, {
            'quizId': questionData[activeIndex].id,
            'answer': isNext ? selectedOptionkey : '',
            'skip': isNext ? '0' : '1',
        }]);

        if (questionData.length == activeIndex + 1) {
            if (allFinalAnswers.length == questionData.length) {
                submitResultsAction(allFinalAnswers).then(res => {
                    console.log(res);
                    if (res?.status) {
                        replace('Result', { result: res?.test });
                    }
                }).catch(err => {
                    console.log(err);
                })
            }
        }
    }


    const onPressNext = () => {
        console.log(allFinalAnswers);
        if (!selectedAnswer) {
            AppToastMessage('Please select a answer first!');
            return;
        }

        saveAnswerLocally(true);
        if (questionData.length == activeIndex + 1) {
            return;
        }

        const index = activeIndex + 1;
        if (ref?.current) {
            ref?.current?.scrollToIndex({ index, animated: true });
            setselectedAnswer(null)
        }
    }


    const onPressSkip = () => {
        console.log(allFinalAnswers);
        saveAnswerLocally(false);
        if (questionData.length == activeIndex + 1) {
            return;
        }

        const index = activeIndex + 1;
        if (ref?.current) {
            ref?.current?.scrollToIndex({ index, animated: true });
            setselectedAnswer(null)
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ marginHorizontal: 20, flex: 1, marginTop: 10 }}>
                <View style={{ flex: 1 }}>

                    <View style={{ ...flexRow, justifyContent: 'space-between', marginBottom: 20 }}>
                        <AppText text={`Quiz: ${questionData?.length}`} size={20} />
                        <AppText text={`${minutes}:${seconds == 0 ? '00' : seconds < 10 ? '0' + seconds : seconds} min`} size={20} />
                    </View>

                    <FlatList
                        ref={ref}
                        // initialNumToRender={1}
                        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
                        horizontal
                        pagingEnabled
                        scrollEnabled={false}
                        // maxToRenderPerBatch={3}
                        windowSize={2}
                        showsHorizontalScrollIndicator={false}
                        style={{
                            width: width,
                        }}
                        onScroll={e => {
                            if (activeIndex != Math.round(e.nativeEvent.contentOffset.x / width)) {
                                setActiveIndex(
                                    Math.round(e.nativeEvent.contentOffset.x / width),
                                );
                            }
                        }}
                        initialScrollIndex={activeIndex}
                        data={questionData}
                        keyExtractor={(_, index) => index}
                        renderItem={({ item, index }) => {
                            return <ScrollView>
                                <QuestionAndOptions
                                    item={item}
                                    index={index}
                                    selectedAnswer={selectedAnswer}
                                    setselectedAnswer={setselectedAnswer}
                                    onPressSkip={onPressSkip}
                                    setselectedOptionkey={setselectedOptionkey}
                                />
                            </ScrollView>
                        }}
                    />
                </View>
                <TouchableTextView value={'Next'} onPress={onPressNext} />
            </View>
        </View>
    )
}

export default QuestionariesScreen

const styles = StyleSheet.create({})