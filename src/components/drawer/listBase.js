import React, { Component } from 'react';


import {
    Image,
    Text,
    View,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import styles from '../../styles/partStyle';


import { formatImageLink } from "../../helper/index"

class ListBase extends Component {
    constructor() {
        super()
    }

    shouldComponentUpdate(nextProps) {
        if (nextProps.item !== this.props.item) {
            return true
        }
        return false;
    }


    render() {
        const { item } = this.props;
        console.log(1);
        console.log(item);
        return (
            <View>
                <TouchableOpacity activeOpacity={0.8}
                    style={[styles.contentCardModuleBase, styles.shadow, { marginLeft: 20, marginRight: 20, marginBottom : 1 }]}
                    >
                    <View style={styles.contentCardImageAvatarModuleBase}>
                        <Image source={{ uri: formatImageLink(item.avatar_url) }} style={[styles.imageAvatarModuleBase, styles.backgroundColorOfImgInBase]} />
                    </View>
                    <View style={[styles.contentCardImageInformation]}>
                        <Text numberOfLines={1} style={styles.emailNameModuleEmail}>{item.name.toUpperCase().trim()}</Text>
                        <Text numberOfLines={2} style={styles.textDescriptionDark}>{item.address.trim()}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default ListBase;


