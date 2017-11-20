import React, {Component} from 'react';
import {
    Text, View, Platform, StatusBar
} from 'react-native';
import {
    Body, CardItem, Header, Container, Button,
    Left, Right, Spinner, Item
} from 'native-base';
import BackButton from '../../commons/BackButton';
import part from '../../styles/partStyle';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as color from '../../styles/color'
import parallaxStyle from '../../styles/parallaxStyle';
import * as size from '../../styles/size';
import * as curriculumAction from '../../actions/curriculumAction';
import WebViewAutoHeight from '../../commons/WebViewAutoHeight';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

class CurriculumInformationContainer extends Component {
    componentWillMount() {
        const {params} = this.props.navigation.state;
        this.props.curriculumAction.getCurriculum(params.id, this.props.token)
    }

    render() {
        const {goBack, navigate} = this.props.navigation;
        const {isLoadingCurriculum, data} = this.props;
        return (
            <Container style={part.wrapperContainer}>
                <StatusBar
                    backgroundColor={color.bgModal}
                    barStyle={ Platform.OS === 'ios' ? "dark-content" : "light-content"}
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
                                        <Text style={[part.titlePost, part.marginBottom]} numberOfLines={1}>
                                            {
                                                isLoadingCurriculum
                                                    ?
                                                    'Đang tải...'
                                                    :
                                                    data.name
                                            }
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
                                        {
                                            isLoadingCurriculum
                                                ?
                                                'Đang tải...'
                                                :
                                                data.name
                                        }
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
                    {
                        isLoadingCurriculum
                            ?
                            <View
                                style={{
                                    marginTop: 20,
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Spinner
                                    color={color.gray}/>
                            </View>
                            :
                            <WebViewAutoHeight source={data.detail ? data.detail : ''}/>
                    }
                </ParallaxScrollView>
            </Container>
        );
    }
}


function mapStateToProps(state) {
    return {
        token: state.login.token,
        data: state.curriculum.data,
        isLoadingCurriculum: state.curriculum.isLoadingCurriculum,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        curriculumAction: bindActionCreators(curriculumAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurriculumInformationContainer)