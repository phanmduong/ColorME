import {StyleSheet, Dimensions} from 'react-native';
import * as color from './color';
import * as size from './size';
import {wid, hei} from "./size";

const part = StyleSheet.create({
    // NAV BAR
    navTop: {
        borderBottomWidth: 0,
        shadowColor: 'transparent',
        backgroundColor: color.main,
        alignItems: 'center',

    },
    itemTab: {
        paddingLeft: 10,
        paddingRight: 10,
        height: 40,
        backgroundColor: color.backGround,
        borderBottomWidth: 0.5,
    },
    itemTabInDrawer: {
        paddingLeft: 10,
        paddingRight: 10,
        height: 40,
        backgroundColor: color.backGround,
        borderBottomWidth: 0,
    },
    tabInDrawer: {
        padding: 10,
        justifyContent: 'center',
        position: 'absolute',
        height: 200,
        width: wid * 3 / 4,
        backgroundColor: color.none,
        borderBottomWidth: 0,

    },
    tabInGetFull: {
        justifyContent: 'center',
        position: 'absolute',
        width: wid,
        backgroundColor: color.none,
        borderBottomWidth: 0,

    },
    rightTab: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },


    //WRAPPER
    wrapperContainer: {
        padding: 0,
        backgroundColor: color.backGround,
    },
    wrapperImageInGetFull: {
        position: 'relative',
        width: wid,
        height: 250,
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    wrapperImageInDrawer: {
        width: wid * 3 / 4,
        height: 180,
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    featureWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width: wid,
        height: hei / 3 + 3,
    },
    wrapperIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 25,
        width: 25,
    },
    wrapperDeadline: {
        marginLeft: 3,
        width: wid - 30,
        height: 10,
        borderRadius: 5,
        backgroundColor: color.lightGray,
    },
    wrapperNotResult: {
        paddingTop: 20,
        flex: 1,
        alignItems: 'center',
    },
    wrapperIntro: {
        width: wid,
        height: hei,
        zIndex: 1000,
        flex: 1,
        top: 0, bottom: 0, left: 0, right: 0,
        position: 'absolute',
        backgroundColor: color.main,
    },
    wrapperModalComment: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapperCommentInModal: {
        height: hei * 0.7 - 90,
        backgroundColor: color.backGround
    },
    backgroundNone:{
       backgroundColor: color.none,
    },
    modalComment: {
        borderRadius: 10,
        width: wid * 0.9,
        height: hei * 0.7,
        backgroundColor: color.backGround,
    },

    deadlineProgress: {
        height: 10,
        borderRadius: 5,
        backgroundColor: 'rgb(41, 173, 5)',
    },


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

    iconInDrawer: {
        width: wid - wid / 10,
        flexDirection: 'row',
        backgroundColor: color.none,
        position: 'absolute',
        left: 10,
        top: 20,
    },
    iconInDrawerNav: {
        width: wid - wid / 10,
        flexDirection: 'row',
        backgroundColor: color.none,
        position: 'absolute',
        left: 10,
    },

    iconAddFriendInProfile: {
        width: 44,
        height: 44,
        borderRadius: 22,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.green,
        marginBottom: 0,
        right: 20,
        top: -22,
    },

    iconFollow: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: color.gray,
    },

    // TEXT INPUT

    inputTheme01: {
        fontSize: size.describe,
        height: 30,
    },
    inputTheme02: {
        height: 30,
        fontSize: 14,
        fontWeight: '600',
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

    avatarUserNormal: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    avatarUserSmall: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },

    image: {
        height: 400,
        width: wid,
        flex: 1,
        position: 'relative',
        backgroundColor: color.icon,
    },
    imageTopic: {
        margin: 3,
        height: 250,
        width: wid - 30,
        flex: 1,
        borderRadius: 5,
        position: 'relative',
        backgroundColor: color.icon
    },
    video: {
        margin: 3,
        height: 400,
        width: wid - 30,
        flex: 1,
        borderRadius: 5,
        position: 'relative',
    },
    imageInGetFull: {
        opacity: 1,
        height: 240,
        width: wid,
        flex: 1,
        position: 'relative',
    },

    imageInDrawer: {
        opacity: 0.2,
        flex: 1,
        position: 'relative',
    },
    imageInGrid: {
        width: wid / 3 - 2,
        height: wid / 3 - 2,
    },
    imageInFeature: {
        position: 'relative',
        width: wid - 2,
        height: hei / 3,
    },

    titleLargeDarkBold: {
        fontSize: 30,
        fontWeight: 'bold',
        color: color.text,
    },


    titleSmallDarkBold: {
        fontSize: size.titleSmall,
        color: color.text,
        fontWeight: '700',
    },
    titleSmallDarkGrayBold: {
        fontSize: size.titleSmall,
        color: color.darkGray,
        fontWeight: '700',
    },
    titleSmallBlue: {
        fontSize: size.titleSmall,
        color: color.titleBlue,
        fontWeight: '700',
    },
    titleNormalLight: {
        color: color.navTitle,
    },
    describeDark: {
        fontSize: size.describe,
        color: color.text,
        fontWeight: '400',
    },
    describeDarkGray: {
        fontSize: size.describe,
        color: 'rgb(100, 100, 100)',
        fontWeight: '600',
    },
    describeGray: {
        fontSize: size.describe,
        color: color.gray,
        fontWeight: '600',
    },
    describeLightGray: {
        fontSize: size.describe,
        color: color.lightGray,
        fontWeight: '400',
    },
    describeItalicDark: {
        fontSize: size.describeSmall,
        color: color.gray,
        fontWeight: '400',
    },
    describeInImage: {
        marginBottom: 10,
        fontSize: 12,
        color: color.gray,
    },
    textInImage: {
        width: wid,
        padding: 10,
        fontSize: 12,
        backgroundColor: color.none,
    },
    wrapperTitleFeature: {
        width: wid,
        padding: 10,
        position: 'absolute',
        backgroundColor: color.none,
        bottom: 20,
    },
    titleInImage: {
        color: color.darkGrayText,
        fontSize: 12,
        fontWeight: 'bold',
    },
    titleGroup: {
        color: color.navTitle,
        padding: 3,
        paddingLeft: 7,
        paddingRight: 7,
        fontWeight: '600',
        fontSize: 12,
    },
    textButton: {
        marginTop: -2,
        fontSize: size.describe,
        color: color.gray,
        fontWeight: '600',
    },
    textTitleFeature:{
        color: color.navTitle,
        fontSize: 23,
        fontWeight: 'bold',
        textShadowColor: color.text,
        textShadowRadius: 5,
        textShadowOffset: {width: 1, height: 1},
    },
    //BUTTON

    buttonGroup: {
        backgroundColor: 'rgba(20, 20, 20, 0.7)',
        borderRadius: 5,
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
    paddingLine: {
        paddingTop: 3,
        paddingBottom: 3,
    },
    paddingLineFar: {
        paddingTop: 20,
        paddingBottom: 20,
    },
    paddingTRB: {
        paddingRight: 5,
        paddingBottom: 5,
        paddingTop: 5,
    },
    paddingTLB: {
        paddingLeft: 5,
        paddingBottom: 5,
        paddingTop: 5,
    },
    noPadding: {
        paddingLeft: 0,
        paddingRight: 0,
    },

    margin: {
        margin: 10,
    },
    marginLeftFar: {
        paddingLeft: 20
    },
    marginRight: {
        marginRight: 5,
    },
    marginLeft: {
        marginLeft: 5,
    },
    marginBottom: {
        marginBottom: 5,
    },
    marginTop: {
        marginTop: 5,
    },
    marginTRB: {
        marginRight: 5,
        marginBottom: 5,
        marginTop: 5,
    },
    marginStatusBar: {
        marginTop: 20,
    },
    noMarginLeft: {
        marginLeft: 0,
    },
    // LIST ITEM
    listItem: {
        backgroundColor: color.backGround,
        marginLeft: 0,

    },

    //Card
    card: {
        position: 'relative',
        width: wid,
        borderBottomWidth: 0,
        borderColor: color.none,
        shadowColor: color.none,

    },
    cardGetFull: {
        position: 'relative',
        width: wid,
        borderBottomWidth: 0,
        borderColor: color.none,
        shadowColor: color.none,
    },
    cardHeader: {
        margin: 0,
        backgroundColor: color.none,
    },
    cardFooter: {
        paddingTop: 0,
        paddingBottom: 10,
        borderBottomWidth: 0.5,
        borderColor: color.icon,
    },
    cardButton: {
        height: size.iconBig + 15,
    },
    cardTopInModal: {
        backgroundColor: color.none,
        height: 40,
        borderBottomWidth: 0.5,
        borderColor: color.icon,
    },
    cardProgress: {
        margin: 5,
    },
    cardCmt: {
        flexDirection: 'row',
        flex: 1,
    },
    cardRepCmt: {
        flexDirection: 'row',
        flex: 1,
        marginLeft: 40,
    },
    cardBottom: {
        width: wid,
        flexDirection: 'row',
        height: 50,
        backgroundColor: color.backGround,
        bottom: 0,
    },

    cardBottomInModal: {
        width: wid * 0.9,
        flexDirection: 'row',
        height: 50,
        backgroundColor: color.backGround,
        bottom: 0,
        borderRadius: 10,
    },


    //GRID IMAGE
    wrapperGrid: {
        width: wid,
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
    },
    wrapperGridImage: {
        width: (wid) / 3,
        height: (wid) / 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapperTabBarUser:{
        width: size.wid,
        height: 70,
        backgroundColor: color.none,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderColor: color.icon,
    },
    wrapperTextInTabBarUser:{
        flex: 1,
        height: 80,
        backgroundColor: color.none,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapperTextNotLength:{
        flex: 1,
        height: 55,
        backgroundColor: color.none,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    noBorder: {
        borderBottomWidth: 0,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
    },
    // SHADOW
    shadow: {
        shadowColor: color.text,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
    },
    //
    haveBorderBottom: {
        borderBottomWidth: 0.5,
        borderColor: color.icon,
    },
});


export default part;