import React, {Component} from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View,
    FlatList,
    Platform,
} from 'react-native';
import {
    List,
    ListItem,
    Body,
    Button,
    Card,
    CardItem,
    Container,
    Content,
    Input,
    Item,
    Left,
    Right,
    Spinner,
    Thumbnail
} from 'native-base';
import Icon from '../../commons/Icon';
import BackButton from '../../commons/BackButton';
import Video from 'react-native-video';
import part from '../../styles/partStyle';
import parallaxStyle from '../../styles/parallaxStyle';
import * as color from '../../styles/color';
import * as size from '../../styles/size';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import * as topicAction from '../../actions/topicAction';
import WebViewAutoHeight from '../../commons/WebViewAutoHeight';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import LinearGradient from 'react-native-linear-gradient';

class TopicContainer extends Component {
    constructor() {
        super();
        this.state = {}
    }

    componentWillMount() {
        const {params} = this.props.navigation.state;
        this.props.topicAction.getTopic(params.id, this.props.token);
        this.props.topicAction.getProductsInTopic(params.id, 1, this.props.token);
    }

    render() {
        const {goBack, navigate} = this.props.navigation;
        const {isLoading, isLoadingProducts, topic, products} = this.props;
        let widthDeadlineProgress = isLoading ? 0 : ((size.wid - 20) * topic.submitted_members / topic.total_members);
        return (
            <Container style={part.wrapperContainer}>
                <ParallaxScrollView
                    backgroundColor={color.backGround}
                    showsVerticalScrollIndicator={false}
                    headerBackgroundColor={color.backGround}
                    stickyHeaderHeight={size.STICKY_HEADER_HEIGHT}
                    parallaxHeaderHeight={300}
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
                                            {
                                                isLoading
                                                    ?
                                                    'Đang tải...'
                                                    :
                                                    topic.title
                                            }
                                        </Text>
                                    </Item>
                                </CardItem>
                                {
                                    topic.description == ""
                                        ?
                                        <View/>
                                        :
                                        <CardItem style={[part.cardHeader, part.noPaddingBottom]}>
                                            <Item style={part.noBorder}>
                                                <Text style={part.describeInImage} numberOfLines={2}>
                                                    {
                                                        isLoading
                                                            ?
                                                            'Đang tải...'
                                                            :
                                                            topic.description
                                                    }
                                                </Text>
                                            </Item>

                                        </CardItem>
                                }
                            </View>
                            <View style={[parallaxStyle.parallaxHeaderPost, {flexDirection: 'row'}]}>
                                <CardItem style={[part.cardHeader, {marginTop: 10}]}>
                                    {
                                        (!isLoading && topic.creator)
                                            ?
                                            (
                                                <Left>
                                                    <TouchableOpacity
                                                        onPress={() => navigate('UserInNewFeed', {username: topic.creator.avatar_url})}
                                                    >
                                                        <Thumbnail circle
                                                                   source={{uri: topic.creator.avatar_url}}/>
                                                    </TouchableOpacity>
                                                    <Body>
                                                    <Text
                                                        style={[part.describeDarkGray, part.paddingLine]}
                                                        onPress={() => navigate('UserInNewFeed', {username: topic.creator.username})}
                                                    >
                                                        Đăng bởi &nbsp;
                                                        <Text
                                                            style={part.titleSmallBlue}>
                                                            {topic.creator.name}
                                                        </Text>
                                                    </Text>
                                                    <Text
                                                        style={[part.describeItalicDark, part.paddingLine]}>
                                                        {topic.created_at}
                                                    </Text>
                                                    <View style={[{flexDirection: 'row'}, part.paddingLine]}>
                                                        {
                                                            topic.colors
                                                                ?
                                                                topic.colors.map((color, i) => {
                                                                    return (
                                                                        <Icon key={i}
                                                                              name="fontawesome|circle"
                                                                              style={part.paddingRight}
                                                                              size={12}
                                                                              color={'#' + color}/>
                                                                    );
                                                                })
                                                                :
                                                                <Text/>

                                                        }
                                                    </View>
                                                    </Body>
                                                </Left>
                                            )
                                            :
                                            (
                                                <View/>
                                            )
                                    }
                                </CardItem>
                            </View>
                            <View>
                                <CardItem style={[{height: 20, justifyContent: 'center'}]}>
                                    <View style={part.wrapperDeadline}>
                                        <View
                                            style={[part.deadlineProgress, {width: widthDeadlineProgress}]}>
                                        </View>
                                    </View>
                                </CardItem>
                                <CardItem footer style={[part.cardFooter, {paddingRight: 25}]}>
                                    <Left>
                                        <Right>
                                            <Text style={[part.describeGray, {right: 0}]}>
                                                {
                                                    isLoading
                                                        ?
                                                        ''
                                                        :
                                                        `${topic.deadline} - ${topic.submitted_members}/${topic.total_members} đã nộp`
                                                }

                                            </Text>
                                        </Right>
                                    </Left>
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
                                        {isLoading
                                            ?
                                            'Đang tải...'
                                            :
                                            topic.title}
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
                        isLoading
                            ?
                            <View
                                style={{
                                    margin: 50,
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Spinner
                                    color={color.gray}/>
                            </View>
                            :
                            <View>
                                <View>
                                    <Image
                                        resizeMode={'cover'}
                                        source={{
                                            uri: topic.avatar_url,
                                            width: size.wid,
                                            height: size.PARALLAX_HEADER_HEIGHT
                                        }}/>
                                </View>
                            </View>
                    }
                    <CardItem style={[part.cardHeader, part.padding]}>
                        <Item style={part.noBorder}>
                            <Text style={part.titlePost} numberOfLines={1}>
                                Bài đăng đã nộp
                            </Text>
                        </Item>
                    </CardItem>
                    {
                        isLoadingProducts
                            ?
                            <View
                                style={{
                                    margin: 50,
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Spinner
                                    color={color.gray}/>
                            </View>
                            :
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                data={products}
                                onEndThreshold={5}
                                renderItem={({item}) => {
                                    return (
                                        <View style={part.card}>
                                            {
                                                isLoadingProducts
                                                    ?
                                                    <View
                                                        style={{
                                                            margin: 50,
                                                            flex: 1,
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                        }}
                                                    >
                                                        <Spinner
                                                            color={color.gray}/>
                                                    </View>
                                                    :
                                                    <View>
                                                        <CardItem header style={part.cardHeader}>
                                                            <Left>
                                                                <TouchableOpacity
                                                                    activeOpacity={0.8}
                                                                    onPress={() => navigate('UserInNewFeed', {username: item.author.username})}>
                                                                    <Thumbnail circle small
                                                                               source={{uri: item.author.avatar_url}}/>
                                                                </TouchableOpacity>
                                                                <Body>
                                                                <Text
                                                                    onPress={() => navigate('UserInNewFeed', {username: item.author.username})}
                                                                    style={part.titleSmallBlue}>
                                                                    {item.author.name}
                                                                </Text>
                                                                <Text
                                                                    style={part.describeItalicDark}>
                                                                    {item.created_at}
                                                                </Text>
                                                                </Body>
                                                            </Left>
                                                        </CardItem>
                                                        <TouchableOpacity
                                                            activeOpacity={1}
                                                            style={part.card}
                                                            onPress={() =>
                                                                navigate('ThePostInGroup',
                                                                    item.group
                                                                        ?
                                                                        {
                                                                            product_id: item.id,
                                                                            group_name: item.group.name,
                                                                            group_link: item.group.link,
                                                                        }
                                                                        :
                                                                        {
                                                                            product_id: item.id,
                                                                        }
                                                                )}>
                                                            <View>
                                                                <View
                                                                    style={[part.wrapperImage, part.shadow]}
                                                                    activeOpacity={1}
                                                                >
                                                                    <Image
                                                                        resizeMode={'cover'}
                                                                        source={{
                                                                            uri: item.image_url,
                                                                        }}
                                                                        style={[part.image]}
                                                                    />
                                                                </View>
                                                            </View>
                                                        </TouchableOpacity>
                                                    </View>
                                            }
                                        </View>
                                    )
                                }
                                }
                            />
                    }
                </ParallaxScrollView>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        token: state.login.token,
        topic: state.topic.topic,
        isLoading: state.topic.isLoading,
        isLoadingProducts: state.topic.isLoadingProducts,
        products: state.topic.products,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        topicAction: bindActionCreators(topicAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicContainer);