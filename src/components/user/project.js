import React, {Component} from 'react';
import {
    TouchableOpacity, View
} from 'react-native';
import {
    Content, Spinner
} from 'native-base';
import part from '../../styles/partStyle';
import * as color from '../../styles/color';
import * as userInformationAction from '../../actions/userInformationAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import FastImage from 'react-native-fast-image'
import {NavigationActions} from 'react-navigation'

class Project extends Component {
    render() {
        return (
            <Content
                showsVerticalScrollIndicator={false}
                style={[part.wrapperContainer]}>
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
                                                <View key={i} style={[part.wrapperGridImage]}>
                                                    <TouchableOpacity
                                                        onPress={() => this.props.navigation.navigate(
                                                            'ThePostInNewFeed',
                                                            {
                                                                product_id: item.id
                                                            },
                                                        )}
                                                    >
                                                        <FastImage
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
        isLoadingUserProducts: state.userInformation.isLoadingUserProducts,
    }
}
export default connect(mapStateToProps)(Project);