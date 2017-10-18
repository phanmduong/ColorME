import React, {Component} from 'react';
import {
    TouchableOpacity
} from 'react-native';
import {
    Title, Container, Header, Content, Card, CardItem, Thumbnail, Tabs, Tab, Fab, Footer,
    Text, Button, Left, Body, Right, List, ListItem, Item, Input, TabHeading
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as color from '../../styles/color';
import * as size from '../../styles/size';
import part from '../../styles/partStyle';

export default class aboutUs extends Component {
    constructor() {
        super();
    }

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
                    <Body>
                        <Title style={part.navTitle}>Giới thiệu</Title>
                    </Body>
                    <Right>

                    </Right>
                </Header>
                <Container style={{backgroundColor: color.main, padding: 30,}}>
                    <Text style={[part.titleBigLightThin, {paddingBottom: 30}]}>ColorME dành cho IOS</Text>
                    <Text style={[part.describeLightGray,part.paddingBottom]}>Phiên bản: </Text>
                    <Text style={[part.describeLight,{paddingBottom: 20}]}>DEMO VERSION</Text>
                    <Text style={[part.describeLightGray,part.paddingBottom]}>Về ColorME: </Text>
                    <Body>
                        <Text style={[part.describeLight,part.paddingBottom]}>LỚP HỌC THIẾT KẾ CHO MỌI NGƯỜI</Text>
                        <Text style={[part.describeLight,part.paddingBottom, {fontStyle: 'oblique'}]}>
                            &nbsp;&nbsp;"Nếu bạn đang muốn cần một nơi để bắt đầu con đường học thiết kế đồ hoạ của mình, thì colorME chính là thứ mà bạn đang tìm kiếm.
                            Sau gần 2 năm hoạt động, colorME đang được biết đến như một trong những trung tâm đào tạo đồ hoạ lớn nhất Hà Nội.
                            Với kinh nghiệm đào tạo hơn 5000 học viên, colorME đang ngày một hoàn thiện sản phẩm của mình để đưa được đến cho người dùng những trải nghiệm tuyệt vời nhất."
                        </Text>
                    </Body>

                </Container>
                <Footer backgroundColor={color.main}
                        style={{borderTopWidth: 0, backgroundColor: color.main}}>
                    <Text style={[part.describeLightGray,part.paddingBottom]}>Một sản phẩm của <Text style={part.describeLight}>KEETOOL</Text></Text>
                </Footer>
            </Container>
        );
    }
}
