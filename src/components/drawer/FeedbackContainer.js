import React , {Component} from 'react';
import {View, Alert,StatusBar,Platform, Text, Dimensions, KeyboardAvoidingView,StyleSheet, TouchableOpacity,ActivityIndicator} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import parallaxStyle from '../../styles/parallaxStyle';
import * as color from '../../styles/color';
import part from '../../styles/partStyle';
import * as size from '../../styles/size';
import BackButton from '../../commons/BackButton';
import styles from '../../styles/loginRegisterStyle'
import * as feedbackAppAction from '../../actions/feedbackAppAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Container, Content, Form, Input, Item, Left, CheckBox, Body, Header, CardItem} from 'native-base';
class FeedBackAppContainer extends Component {
    constructor(){
        super()
        this.state = {
            name : '',
            email :'',
            message : '',
        }
    }
    feedbackApp(value){
        if (this.state.message === '') {
            Alert.alert('Có lỗi xảy ra', 'Bạn nên nhập  đủ thông tin để chúng tôi có thể chăm sóc cụ thể cho bạn ');
        }
        else {
            this.setState({
                name: this.props.user.name,
                email: this.props.email
            })
            this.props.feedbackAppAction.feedbackApp(value);
        }
    }
    render(){
        const {goBack} = this.props.navigation
        return (
            <Container style={[part.wrapperContainer, {paddingBottom: 0}]}>
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor={color.none}
                />
                <ParallaxScrollView
                    backgroundColor={color.backGround}
                    showsVerticalScrollIndicator={false}
                    headerBackgroundColor={color.backGround}
                    stickyHeaderHeight={size.STICKY_HEADER_HEIGHT}
                    parallaxHeaderHeight={80}
                    backgroundSpeed={10}
                    renderBackground={() => (
                        <View style={part.wrapperImageInGetFull}>
                            <View key="background">
                            </View>
                        </View>
                    )}
                    renderForeground={() => (
                        <View key="parallax-header" style={[parallaxStyle.parallaxHeaderTitle]}>
                            <View>
                                <CardItem style={[part.cardHeader, part.noPaddingTopBottom]}>
                                    <Item style={part.noBorder}>
                                        <Text style={part.titlePost} numberOfLines={1}>
                                            Phản hồi của người dùng
                                        </Text>
                                    </Item>
                                </CardItem>
                            </View>
                        </View>

                    )}
                    renderStickyHeader={() => (
                        <View key="sticky-header" style={parallaxStyle.stickySection}>
                            <View style={part.iconInDrawerNav}>
                                <Left style={Platform.OS === 'ios' ? {
                                    flexDirection: 'row',
                                    marginTop: 20
                                } : {flexDirection: 'row'}}>
                                    <Body style={{padding: 30}}>
                                    <Text style={part.titleSmallDarkGrayBold} numberOfLines={1}>
                                        Phản hồi của người dùng
                                    </Text>
                                    </Body>
                                </Left>
                            </View>
                        </View>
                    )}
                    renderFixedHeader={() => (
                        <View key="fixed-header" style={part.iconInDrawerNav}>
                            <Left style={Platform.OS === 'ios' ? {marginTop: 20} : {marginTop: 10}}>
                                <BackButton goBack={goBack}/>
                            </Left>
                        </View>
                    )}
                >
                    <View style={{padding : 10, marginTop : 10}}>
                        <Text style={[part.describeItalicDark, part.paddingLine]}> Trong quá trình tạo sản phẩm, vẫn còn nhiều thiếu sót. Rất mong được mọi người
                            quan tâm và gửi những phản hồi, để chúng tôi có thể hoàn thiện sản phẩm tốt nhất
                            có thể. Các bạn có thể gửi những phản hồi cho chúng tôi theo mẫu dưới đây :
                             </Text>
                    </View>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'position' : undefined}
                        keyboardVerticalOffset={Platform.OS === 'ios' ? undefined : '200'}
                        style = {{flex : 1, justifyContent: 'center', alignItems : 'center'}}
                    >
                    <Item style={styles.itemInput} regular>
                        <Input style={part.inputTheme04}
                               underlineColorAndroid={color.none}
                               keyboardType={'email-address'}
                               returnKeyType={'done'}
                               autoCorrect={false}
                               multiline = {true}
                               onChangeText={(message) => {
                                   this.setState({message})
                               }}
                               value={this.state.message}
                        />
                    </Item>
                    </KeyboardAvoidingView>
                    <View style = {{flex : 1, justifyContent: 'center', alignItems : 'center', marginTop : 10}} >
                    <TouchableOpacity
                        rounded
                        style={styles.buttonRegister}
                        onPress={() => this.feedbackApp(this.state)}
                    >
                        {(this.props.isLoadingFeedback) ? (
                            <Container style={{
                                padding: 10,
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <ActivityIndicator
                                    animated={true}
                                    color={color.navTitle}
                                    style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: 40,
                                    }}
                                    size='small'
                                />
                            </Container>
                        ) : (
                            <Text style={styles.textButton}>Xác nhận</Text>
                        )
                        }
                    </TouchableOpacity>
                    </View>
                </ParallaxScrollView>

            </Container>
                )
    }
}
let style = StyleSheet.create({
    input : {
        width : Dimensions.get('window').width * 0.8,
    }
})
function mapStateToProps(state){
    return{
        email : state.login.login.email,
        user : state.login.user,
        isLoadingFeedback : state.feedback.isLoadingFeedback
    }
}
function mapDispatchToProps(dispatch) {
    return {
        feedbackAppAction: bindActionCreators(feedbackAppAction, dispatch),
    }
}
export default connect (mapStateToProps, mapDispatchToProps) (FeedBackAppContainer);