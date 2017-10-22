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
        width: size.wid * 3 / 4,
        backgroundColor: color.none,
        borderBottomWidth: 0,

    },
    tabInGetFull: {
        justifyContent: 'center',
        position: 'absolute',
        width: size.wid,
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
        width: size.wid,
        height: 250,
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    wrapperImageInDrawer: {
        width: size.wid * 3 / 4,
        height: 180,
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    featureWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width: size.wid,
        height: size.hei / 3 + 3,
    },
    wrapperIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 25,
        width: 25,
    },
    wrapperDeadline: {
        marginLeft: 3,
        width: size.wid - 30,
        height: 10,
        borderRadius: 5,
        backgroundColor: color.lightGray,
    },
    wrapperNotResult: {
        padding: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
        height: size.hei * 0.7 - 90,
        backgroundColor: 'blue'
    },

    modalComment: {
        borderRadius: 10,
        width: size.wid * 0.9,
        height: size.hei * 0.7,
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
    iconTabBar: {
        color: color.icon,
    },
    iconLight: {
        color: color.navTitle,
        width: 18,
        height: 18,
        margin: 5,
    },
    iconInDrawer: {
        width: wid - wid / 10,
        flexDirection: 'row',
        backgroundColor: color.none,
        position: 'absolute',
        top: 20,
        left: 10,
    },
    iconLikeInImage: {
        width: 44,
        height: 44,
        borderRadius: 22,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.main,
        bottom: 48,
        marginBottom: 0,
        right: 40,
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
    iconLikeInImageFullAbout: {
        width: 44,
        height: 44,
        borderRadius: 22,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.main,
        right: 20,
        bottom: 70,
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
    inputSearch: {
        width: size.wid - size.wid * 0.12,
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
        height: 30,
        fontSize: 14,
        fontWeight: '600',
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
    online: {
        borderWidth: 1,
        padding: 1,
        borderRadius: 50,
        borderColor: color.main
    },
    image: {
        height: 400,
        width: size.wid,
        flex: 1,
        position: 'relative',
        backgroundColor: color.icon,
    },
    imageTopic: {
        margin: 3,
        height: 250,
        width: size.wid - 30,
        flex: 1,
        borderRadius: 5,
        position: 'relative',
        backgroundColor: color.icon
    },
    video: {
        margin: 3,
        height: 400,
        width: size.wid - 30,
        flex: 1,
        borderRadius: 5,
        position: 'relative',
    },
    imageInGetFull: {
        opacity: 1,
        height: 240,
        width: size.wid,
        flex: 1,
        position: 'relative',
    },
    imageInUserProfile: {
        opacity: 0.2,
        width: size.wid,
        flex: 1,
        position: 'relative',
    },
    imageInDrawer: {
        opacity: 0.2,
        flex: 1,
        position: 'relative',
    },
    imageInGrid: {
        width: size.wid / 3 - 2,
        height: size.wid / 3 - 2,
    },
    videoInGrid: {
        backgroundColor: color.icon,
        width: size.wid * 2 / 3 - 2,
        height: size.wid * 2 / 3 - 2,
    },
    imageInFeature: {
        position: 'relative',
        width: size.wid - 2,
        height: size.hei / 3,
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
    titleLargeDarkBold: {
        fontSize: 30,
        fontWeight: 'bold',
        color: color.text,
    },
    titleLargeGrayDark: {
        fontSize: 25,
        color: color.darkGray,
        fontWeight: '600',
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
        color: 'rgb(100, 100, 100)',
        fontWeight: '500',
    },
    describeLight: {
        fontSize: size.describe,
        color: color.navTitle,
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
        fontSize: size.describe,
        color: color.navTitle,
        fontWeight: '600',
        textShadowColor: color.text,
        textShadowRadius: 5,
        textShadowOffset: {width: 1, height: 1},
    },
    textInImage: {
        width: size.wid,
        padding: 10,
        position: 'absolute',
        backgroundColor: color.none,
        bottom: 20,
    },
    titleInImage: {
        color: color.navTitle,
        fontSize: 23,
        fontWeight: 'bold',
        textShadowColor: color.text,
        textShadowRadius: 5,
        textShadowOffset: {width: 1, height: 1},
    },
    titleGroup: {
        color: color.navTitle,
        padding: 3,
        paddingLeft: 7,
        paddingRight: 7,
        fontWeight: '600',
        fontSize: 12,
    },

    //BUTTON
    buttonTheme01: {
        backgroundColor: color.main,
        justifyContent: 'center',
        width: size.wid - size.wid * 0.1,
        margin: 15,
        borderRadius: 0,
    },
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
        width: size.wid,
        borderBottomWidth: 0,
        borderColor: color.none,
        shadowColor: color.none,

    },
    cardGetFull: {
        position: 'relative',
        width: size.wid,
        borderBottomWidth: 0,
        borderColor: color.none,
        shadowColor: color.none,
    },
    cardHeader: {
        margin: 0,
        backgroundColor: color.none,
    },
    cardFooter: {
        borderBottomWidth: 0.5,
        borderColor: color.icon,
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
        marginLeft: 60,
    },
    cardBottom: {
        width: size.wid,
        flexDirection: 'row',
        height: 50,
        backgroundColor: color.backGround,
        bottom: 0,
    },

    cardBottomInModal: {
        width: size.wid * 0.9,
        flexDirection: 'row',
        height: 50,
        backgroundColor: color.none,
        bottom: 0,
    },


    //GRID IMAGE
    wrapperGrid: {
        width: wid,
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
    },
    wrapperGridImage: {
        width: (size.wid) / 3,
        height: (size.wid) / 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapperGridVideo: {
        width: (size.wid ) * 2 / 3,
        height: (size.wid ) * 2 / 3,
        justifyContent: 'center',
        alignItems: 'center',
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

    flatListNewFeed: {
        height: size.hei - 145
    }
});


export default part;