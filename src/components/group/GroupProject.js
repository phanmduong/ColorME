import React, {Component} from 'react';
import {
    Image, TouchableOpacity, View
} from 'react-native';
import {
    Content, Spinner
} from 'native-base';
import * as color from '../../styles/color';
import part from '../../styles/partStyle';
import {connect} from 'react-redux';
import FastImage from 'react-native-fast-image'

class groupProject extends Component {
    render() {
        return (
            <Content
                showsVerticalScrollIndicator={false}
                style={[part.wrapperContainer]}>
                {
                    (this.props.isLoadingGroupProducts)
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
        products: state.group.products,
        isLoadingGroupProducts: state.group.isLoadingGroupProducts,
    }
}


export default connect(mapStateToProps)(groupProject);