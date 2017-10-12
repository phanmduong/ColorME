import React, {Component} from 'react';
import {
    Image, TouchableOpacity, View
} from 'react-native';
import {
    Content, Spinner
} from 'native-base';
import part from '../../styles/partStyle';
import {connect} from 'react-redux';

class groupProject extends Component {
    render() {
        return (
            <Content
                showsVerticalScrollIndicator={false}
                style={[part.wrapperContainer, part.padding]}>
                {
                    (this.props.isLoadingGroupProducts)
                        ?
                        (
                            <View/>
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
        products: state.group.products,
        isLoadingGroupProducts: state.group.isLoadingGroupProducts,
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(groupProject);