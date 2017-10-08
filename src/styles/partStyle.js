import {StyleSheet, Dimensions} from 'react-native';
import * as color from './color';
import * as size from './size';
import {wid} from "./size";

const part = StyleSheet.create({
    // NAV BAR
    navTop: {
        borderBottomWidth: 0,
        shadowColor: 'transparent',
        backgroundColor: color.main,
        alignItems: 'center',

    },
    itemTab: {
        padding: 10,
        height: 60,
        backgroundColor: color.backGround,
        borderBottomWidth: 0,
    },
    tabInDrawer: {
        padding: 10,
        justifyContent: 'center',
        position: 'absolute',
        height: 200,
        width: size.wid * 3/4,
        backgroundColor: color.none,
        borderBottomWidth: 0,

    },
    rightTab: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },


    //WRAPPER
    wrapperContainer: {
        backgroundColor: color.backGround,
    },
    wrapperImageInDrawer:{
        width: size.wid * 3/4,
        height: 220,
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    featureWrapper:{
        justifyContent: 'center',
        alignItems: 'center',
        width: wid - 20,
        height: 200,
        backgroundColor: 'red',
    },


    //TITLE
    navTitle: {
        color: color.navTitle,
    },

    //ICON
    icon: {
        color: color.text,
        width: 18,
        height: 18,
        margin: 5,
    },
    iconTabBar: {
        color: color.icon,
    },
    iconLight: {
        color: color.navTitle,
        width: 18,
        height: 18,
        margin: 5,
    },
    iconInDrawer:{
        position: 'absolute',
        top: 30,
        left: 10,
    },

    // TEXT INPUT
    inputSearch: {
        width: size.wid- size.wid* 0.12,
        height: 30,
        color: color.navTitle,
        padding: 5,
        fontSize: size.title,
    },
    inputTheme01: {
        fontSize: size.describe,
        height: 30,
    },
    inputTheme02: {
        fontSize: size.title,
    },
    inputTheme03: {
        fontSize: size.describe,
        height: 40,

    },

    //BORDER = NONE
    borderNone: {
        borderBottomWidth: 0,
        borderTopWidth: 0,
    },

    // FORM
    formLoginRegister: {
        margin: 20,
        borderColor: color.none,
    },


    //IMAGE
    avatarUserBig: {
        width: 100,
        height: 100,
        borderRadius: 50,
        margin: 5,
    },
    avatarUserSmall: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    online: {
        borderWidth: 1,
        padding: 1,
        borderRadius: 50,
        borderColor: color.main
    },
    image: {
        height: 400,
        width: size.wid+ 2,
        flex: 1,
        position: 'relative',
        resizeMode: 'cover',
    },
    imageInDrawer:{
        opacity: 0.5,
        flex: 1,
        position: 'relative',
        resizeMode: 'cover',
    },
    imageInGrid: {
        width: size.wid/3 - 15,
        height: size.wid/ 3 - 15,
        borderRadius: 5,
        resizeMode: 'cover'
    },
    imageInFeature:{
        width: wid - 30,
        height: 200,
    },

    //CONTENT
    contentMid: {
        padding: 15,
        alignItems: 'center',
    },


    // TEXT
    titleBigDark: {
        fontSize: size.title,
        color: color.text,
        fontWeight: '800',
    },
    titleBigLightThin: {
        fontSize: 25,
        color: color.navTitle,
        fontWeight: '300',
    },
    titleSmallDarkBold: {
        fontSize: size.titleSmall,
        color: color.text,
        fontWeight: '700',
    },
    titleSmallBlue: {
        fontSize: size.titleSmall,
        color: color.titleBlue,
        fontWeight: '700',
    },
    titleNormalLight: {
        fontSize: size.title,
        color: color.navTitle,
        fontWeight: '700',
    },
    titleSmallDark: {
        fontSize: size.titleSmall,
        color: color.text,
        fontWeight: 'normal',
    },
    describeDark: {
        fontSize: size.describe,
        color: color.text,
        fontWeight: '400',
    },
    describeDarkGray: {
        fontSize: size.describe,
        color: 'rgb(89, 89, 89)',
        fontWeight: '400',
    },
    describeLight: {
        fontSize: size.describe,
        color: color.navTitle,
        fontWeight: '600',
    },
    describeGray: {
        fontSize: size.describe,
        color: color.gray,
        fontWeight: '400',
    },
    describeLightGray: {
        fontSize: size.describe,
        color: color.lightGray,
        fontWeight: '400',
    },
    describeItalicDark: {
        fontStyle: 'italic',
        fontSize: size.describeSmall,
        color: color.gray,
        fontWeight: '400',
    },
    textInImage:{
        position: 'absolute',
        backgroundColor: color.none,
        bottom: 20,
    },
    iconLikeInImage:{
        width: 50,
        height: 50,
        borderRadius: 25,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.main,
        bottom: -25,
        marginBottom: 0,
        right: 20,
    },
    titleInImage:{
        color: color.navTitle,
        fontSize: 23,
        fontWeight: 'bold',
        textShadowColor: color.text,
        textShadowRadius: 10,
        textShadowOffset:{width: 2, height: 2},
    },

    //BUTTON
    buttonTheme01: {
        backgroundColor: color.main,
        justifyContent: 'center',
        width: size.wid- size.wid* 0.1,
        margin: 15,
        borderRadius: 0,
    },


    // PADDING
    padding: {
        padding: 10,
    },
    paddingIcon: {
        paddingLeft: 10
    },
    paddingRight: {
        paddingRight: 5,
    },
    paddingLeft: {
        paddingLeft: 5,
    },
    paddingBottom: {
        paddingBottom: 5,
    },
    paddingTop: {
        paddingTop: 5,
    },
    paddingTRB: {
        paddingRight: 5,
        paddingBottom: 5,
        paddingTop: 5,
    },

    // LIST ITEM
    listItem: {
        backgroundColor: color.backGround,
        marginLeft: 0,
        paddingLeft: 15,
    },

    //Card
    card: {
        width: size.wid,
        marginLeft: -1,
        borderWidth: 0,
        borderColor: color.none,
    },

    //GRID IMAGE
    wrapperGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
    },
    wrapperGridImage: {
        width: (size.wid - 20) / 3,
        height: (size.wid - 20) / 3,
        justifyContent: 'center',
        alignItems: 'center',
    },



    // SHADOW
    shadow:{
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
    }

});


export default part;