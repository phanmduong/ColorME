import React, {Component} from 'react';
import {
    Image, Dimensions
} from 'react-native';
import {
    Title, Container, Header, Content, Card, CardItem, Thumbnail, Text, CheckBox,
    Button, Left, Body, Right, Tabs, Tab, TabHeading, List, ListItem,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import part from '../../styles/partStyle';
import * as color from '../../styles/color';
import * as size from '../../styles/size';
import * as getUserProfileAction from '../../actions/getUserProfileAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {User} from '../../navigators/appRouter';

class myAccountComponent extends Component {
    render() {
        return (
            <Container>
                <Header
                    style={part.navTop}
                    iosBarStyle={'light-content'}
                    backgroundColor={color.main}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-left" size={size.icon} color={color.navTitle}/>
                        </Button>
                    </Left>
                        <Title style={part.navTitle}>Tài khoản của tôi</Title>
                    <Right>
                        <Button transparent onPress={() => this.props.navigation.navigate('Setting')}>
                            <Icon name="cog" size={size.icon} color={color.navTitle}/>
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <User/>
                </Content>
            </Container>
        );
    }
}
function mapStateToProps(state) {
    return{
        user: state.login.user,
    }
}

function mapDispatchToProps(dispatch) {
    return{
        getUserProfileAction: bindActionCreators(getUserProfileAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(myAccountComponent);