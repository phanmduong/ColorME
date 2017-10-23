import {StyleSheet} from 'react-native';
import * as color from './color';
import * as size from './size';

const parallaxStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: size.wid,
        height: size.PARALLAX_HEADER_HEIGHT
    },
    stickySection: {
        height: size.STICKY_HEADER_HEIGHT,
        justifyContent: 'center',
        backgroundColor: color.main
    },
    parallaxHeader: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'column',
    },
});

export default parallaxStyle;