import React, {Component} from 'react';
import {
    Text, View, Image
} from 'react-native';

import {
    Body, CardItem, Header, Container, Button,
    Left, Right, Spinner,
} from 'native-base';
import BackButton from '../../commons/BackButton';
import part from '../../styles/partStyle';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import parallaxStyle from '../../styles/parallaxStyle';
import * as color from '../../styles/color'
import * as size from '../../styles/size';
import * as courseAction from '../../actions/courseAction';
import WebViewAutoHeight from '../../commons/WebViewAutoHeight';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

class CourseInformation extends Component {
    componentDidMount() {
        const {params} = this.props.navigation.state;
        this.props.courseAction.getCourseInformation(params.linkId, this.props.token);
    }

    render() {
        const {goBack, navigate} = this.props.navigation;
        const {isLoadingCourseInformation, courseInformation} = this.props;
        return (
            <Container style={part.wrapperContainer}>
                {
                    isLoadingCourseInformation
                        ?
                        <View
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Spinner
                                color={color.gray}/>
                        </View>
                        :
                        <ParallaxScrollView
                            backgroundColor={color.main}
                            showsVerticalScrollIndicator={false}
                            headerBackgroundColor={color.main}
                            stickyHeaderHeight={size.STICKY_HEADER_HEIGHT}
                            parallaxHeaderHeight={size.PARALLAX_HEADER_HEIGHT_COURSE_INFORMATION}
                            backgroundSpeed={10}
                            renderBackground={() =>
                                <View style={part.wrapperImageInCourseInformation}>
                                    <View key="background">
                                        {

                                            <View>
                                                <Image
                                                    resizeMode={'cover'}
                                                    source={{
                                                        uri: courseInformation.image_url,
                                                        width: size.wid,
                                                        height: size.PARALLAX_HEADER_HEIGHT_COURSE_INFORMATION
                                                    }}/>
                                            </View>
                                        }
                                        <View style={{
                                            position: 'absolute',
                                            top: 0,
                                            width: size.wid,
                                            backgroundColor: 'rgba(0,0,0,0)',
                                            height: size.PARALLAX_HEADER_HEIGHT_COURSE_INFORMATION
                                        }}/>
                                    </View>
                                    <View style={part.iconInDrawer}>
                                        <Right style={{left: 10}}>

                                        </Right>
                                    </View>
                                </View>
                            }
                            renderStickyHeader={() => (
                                <View key="sticky-header" style={parallaxStyle.stickySection}>
                                    <View style={part.iconInDrawerNav}>
                                        <Left style={{flexDirection: 'row', marginTop: 20,}}>
                                            <Body >
                                                <Text style={part.titleNormalLight}>
                                                    {courseInformation.name}
                                                </Text>
                                            </Body>
                                        </Left>
                                    </View>
                                </View>
                            )}
                            renderFixedHeader={() => (
                                <View key="fixed-header" style={part.iconInDrawerNav}>
                                    <Left style={{marginTop: 20}}>
                                        <BackButton goBack={goBack}/>
                                    </Left>
                                </View>
                            )}
                        >
                            <WebViewAutoHeight source={courseInformation.detail ? courseInformation.detail : ''}/>
                        </ParallaxScrollView>
                }
                <Button full style={{backgroundColor: color.main}}
                    onPress={() => navigate('LearnRegister', {classes: courseInformation.classes})}
                >
                    <Text style={part.titleNormalLight}>Đăng ký ngay</Text>
                </Button>
            </Container>
        );
    }
}


function mapStateToProps(state) {
    return {
        token: state.login.token,
        courseInformation: state.getCourse.courseInformation,
        isLoadingCourseInformation: state.getCourse.isLoadingCourseInformation,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        courseAction: bindActionCreators(courseAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseInformation);