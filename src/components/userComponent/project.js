import React, {Component} from 'react';
import {
    Image, Dimensions, FlatList, TouchableOpacity, View
} from 'react-native';
import {
    Title, Container, Header, Content, Card, CardItem, Thumbnail, Text, CheckBox,
    Button, Left, Body, Right, TabHeading, List, ListItem,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import part from '../../styles/partStyle';
import * as size from '../../styles/size';
import * as getUserProfileAction from '../../actions/getUserProfileAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Project extends Component {
    render() {
        return (
            <Content style={[part.wrapperContainer, part.padding]}>
                {
                    (this.props.products.length === 0)
                        ?
                        (
                            <Body>
                                <Text style={[part.padding, part.describeDark]}>{this.props.user.name} chưa có dự án nào.</Text>
                            </Body>
                        )
                        :
                        (
                            <View style={part.wrapperGrid}>
                                {
                                    this.props.products.map((item, i) => {
                                            return (
                                                <View key={i} style={part.wrapperGridImage}>
                                                    <TouchableOpacity
                                                        onPress={() => this.props.navigation.navigate('PostStack', {product_id: item.id})}
                                                    >
                                                        <Image
                                                            style={[part.imageInGrid, part.shadow]}
                                                            source={{uri: item.thumb_url}}
                                                        />
                                                    </TouchableOpacity>

                                                </View>
                                            )
                                        }
                                    )
                                }
                            </View>

                        )
                }
            </Content>

        )
    }
}

function mapStateToProps(state) {
    return {
        products: state.getUserProfile.products,
        user: state.getUserProfile.user,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getUserProfileAction: bindActionCreators(getUserProfileAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);