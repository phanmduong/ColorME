import React, {Component} from 'react';
import {
    Image, Dimensions, FlatList, TouchableOpacity, View
} from 'react-native';
import {
    Content, Spinner
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import part from '../../styles/partStyle';
import * as size from '../../styles/size';
import * as color from '../../styles/color';
import * as userInformationAction from '../../actions/userInformationAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class groupProject extends Component {
    render() {
        return (
            <Content style={[part.wrapperContainer, part.padding]}>
                {
                    (this.props.isLoadingUserProducts)
                        ?
                        (
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
                        )
                        :
                        (
                            <View style={[part.wrapperGrid]}>
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
        products: state.userInformation.products,
        user: state.userInformation.user,
        isLoadingUserProducts: state.userInformation.isLoadingUserProducts,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInformationAction: bindActionCreators(userInformationAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(groupProject);