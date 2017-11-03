import {StyleSheet, Dimensions} from 'react-native';
import * as color from './color';
import * as size from './size';
import {wid, hei} from "./size";

const part = StyleSheet.create({
    // NAV BAR
    navTop: {
        paddingTop: 20,
        height: 60,
        borderBottomWidth: 0,
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
        alignItems: 'center',
        flexDirection: 'row',
        height: 40,
        backgroundColor: color.backGround,
        borderBottomWidth: 0,
    },
    itemInformation:{
        marginLeft: 0,
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
    wrapperIsLoading: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        padding: 0,
        backgroundColor: color.none,
    },
    wrapperImageInGetFull: {
        position: 'relative',
        width: wid,
        height: 250,
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    wrapperImageInCourseInformation: {
        position: 'relative',
        width: wid,
        height: size.PARALLAX_HEADER_HEIGHT_COURSE_INFORMATION,
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
    wrapperIcon:{
        justifyContent: 'center',
        alignItems: 'center',
        height: 25,
        width: 50,
    },
    wrapperDeadline: {
        marginLeft: 3,
        width: wid - 30,
        height: 10,
        borderRadius: 5,
        backgroundColor: color.lightGray,
    },
    wrapperProfile: {
        width: size.profileProgressWidth,
        height: 10,
        backgroundColor: color.lightGray,
    },
    wrapperTextLoadMore:{
        justifyContent: 'center',
        alignItems: 'center',
        width: wid,
        height: 30,
    },
    wrapperTextCenter:{
        alignItems: 'center',
        flex: 1,
        height: 70,
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
    wrapperStatusBar: {
        margin: -10,
        width: size.wid,
        height: 20,
        backgroundColor: color.main,
    },
    wrapperStatusBarNoPadding: {
        width: size.wid,
        height: 20,
        backgroundColor: color.main,
    },
    wrapperRowCenter: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    backgroundNone: {
        backgroundColor: color.none,
    },
    backgroundGray: {
        backgroundColor: '#f2f2f2',
    },
    modalComment: {
        borderRadius: 10,
        width: wid * 0.9,
        height: hei * 0.7,
        backgroundColor: color.backGround,
    },
    modalMenu: {
        borderRadius: 5,
        width: wid * 0.7,
        backgroundColor: color.backGround,
    },
    modalRegister: {
        borderRadius: 5,
        width: wid * 0.9,
        backgroundColor: color.backGround,
    },

    deadlineProgress: {
        height: 10,
        borderRadius: 5,
        backgroundColor: 'rgb(41, 173, 5)',
    },
    profileProgress: {
        height: 10,
        backgroundColor: color.main,
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
        height: 40,
        flexDirection: 'row',
        backgroundColor: color.none,
        position: 'absolute',
        left: 0,
        top: 20,
    },
    iconInDrawerNav: {
        width: wid,
        flexDirection: 'row',
        backgroundColor: color.none,
        position: 'absolute',
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
        width: 38,
        height: 38,
        borderRadius: 19,
        backgroundColor: color.gray,
    },

    // TEXT INPUT

    inputTheme01: {
        fontFamily: 'Montserrat',
        fontSize: size.describe,
        height: 30,
    },
    inputTheme02: {
        fontFamily: 'Montserrat',
        height: 30,
        fontSize: 13,
        fontWeight: '600',
    },
    inputTheme03: {
        fontFamily: 'Montserrat',
        fontSize: 14,
        lineHeight: 10,
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

    wrapperTextRight: {
        alignItems: 'flex-end',
    },

    //IMAGE

    avatarUserNormal: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: color.icon,
    },
    avatarUserNormalSquare: {
        width: 50,
        height: 50,
        backgroundColor: color.icon,
    },
    avatarUserInDrawer: {
        width: size.wid / 4,
        height: size.wid / 4,
        borderRadius: size.wid / 8,
        backgroundColor: color.icon,
    },
    avatarUserSmall: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: color.icon,
    },

    image: {
        height: size.hei * 0.6,
        width: wid,
        flex: 1,
        position: 'relative',
        backgroundColor: color.backGround,
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
        width: wid * 3 / 4,
        height: 180,
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
        fontFamily: 'Montserrat',
        fontSize: 30,
        fontWeight: 'bold',
        color: color.text,
    },
    titleProfile:{
        fontFamily: 'Montserrat',
        fontSize: 16,
        color: color.darkGray,
    },

    titleSmallDarkBold: {
        fontFamily: 'Montserrat',
        fontSize: size.titleSmall,
        color: color.text,
        fontWeight: '700',
    },

    titleSmallDarkGrayBold: {
        fontFamily: 'Montserrat',
        fontSize: size.titleSmall,
        color: color.darkGray,
        fontWeight: '700',
    },

    titleGrayThin: {
        fontFamily: 'Montserrat',
        fontSize: size.titleNormal,
        color: color.gray,
        fontWeight: '400',
    },
    titleGrayRules: {
        fontFamily: 'Montserrat',
        fontSize: 12,
        color: color.gray,
        fontWeight: '400',
    },
    titleDarkGrayThin: {
        fontFamily: 'Montserrat',
        fontSize: size.titleNormal,
        color: '#3a3a3a',
        fontWeight: '500',
    },
    titleDarkBold: {
        fontFamily: 'Montserrat',
        fontSize: size.titleNormal,
        color: color.text,
        fontWeight: '700',
    },
    titleDark: {
        fontFamily: 'Montserrat',
        fontSize: size.titleNormal,
        color: color.text,
        fontWeight: '600',
    },
    titleSmallBlue: {
        fontFamily: 'Montserrat',
        fontSize: size.titleSmall,
        color: color.titleBlue,
        fontWeight: '600',
    },
    titleNormalLight: {
        fontFamily: 'Montserrat',
        fontSize: size.title,
        color: color.navTitle,
        fontWeight: '500'
    },
    titleNormalLightNav: {
        fontFamily: 'Montserrat',
        fontSize: size.title,
        color: color.navTitle,
        fontWeight: '500',
        marginLeft: -50,
    },
    titleNormalDarkGray: {
        fontFamily: 'Montserrat',
        fontSize: size.title,
        color: color.darkGray,
        fontWeight: '500'
    },
    titleMenuModal: {
        fontFamily: 'Montserrat',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 50,
        fontSize: 14,
        color: color.darkGray,
        fontWeight: '500'
    },
    describeDark: {
        fontFamily: 'Montserrat',
        fontSize: size.describe,
        color: color.text,
        fontWeight: '400',
    },
    describeDarkGray: {
        fontFamily: 'Montserrat',
        fontSize: size.describe,
        color: color.darkGray,
        fontWeight: '400',
    },
    describeGray: {
        fontFamily: 'Montserrat',
        fontSize: size.describe,
        color: color.gray,
        fontWeight: '600',
    },
    describeLightGray: {
        fontFamily: 'Montserrat',
        fontSize: size.describe,
        color: color.lightGray,
        fontWeight: '400',
    },
    describeItalicDark: {
        fontFamily: 'Montserrat',
        fontSize: size.describe,
        color: color.gray,
        fontWeight: '400',
    },
    describeInImage: {
        fontFamily: 'Montserrat',
        fontSize: 12,
        color: color.gray,
    },
    textInImage: {
        fontFamily: 'Montserrat',
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
        fontFamily: 'Montserrat',
        color: color.darkGrayText,
        fontSize: 12,
        fontWeight: 'bold',
    },
    titleGroup: {
        fontFamily: 'Montserrat',
        color: color.navTitle,
        padding: 3,
        paddingLeft: 7,
        paddingRight: 7,
        fontWeight: '600',
        fontSize: 12,
    },
    textButton: {
        fontFamily: 'Montserrat',
        marginTop: -2,
        fontSize: size.describe,
        color: color.gray,
        fontWeight: '600',
    },
    textTitleFeature: {
        fontFamily: 'Montserrat',
        color: color.navTitle,
        fontSize: 23,
        fontWeight: 'bold',
        textShadowColor: color.text,
        textShadowRadius: 5,
        textShadowOffset: {width: 1, height: 1},
    },
    //BUTTON

    buttonGroup: {
        backgroundColor: color.none,
        borderRadius: 5,
    },
    buttonAcceptFull: {
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        height: 35,
        backgroundColor: color.main,

    },
    buttonLeftRegisterMain:{
        marginTop: 5,
        backgroundColor: color.main,
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 10,
        paddingLeft: 10,

    },
    buttonLeftRegisterGray:{
        marginTop: 5,
        backgroundColor: color.icon,
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 10,
        paddingLeft: 10,

    },

    // PADDING
    padding: {
        padding: 10,
    },
    paddingIcon: {
        paddingRight : 5,
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
    noPaddingTop: {
        paddingTop: 0,
    },
    noPaddingTopBottom: {
        paddingTop: 0,
        paddingBottom: 0,
    },
    noPaddingBottom: {
        paddingBottom: 0,
    },

    margin: {
        margin: 10,
    },
    margin5: {
        margin: 8,
    },
    marginLeftFar: {
        paddingLeft: 20
    },
    marginRight: {
        marginRight: 5,
    },
    marginRightFar: {
        marginRight: 15,
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
    wrapperTabBarUser: {
        width: size.wid,
        height: 70,
        backgroundColor: color.none,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderColor: color.icon,
    },
    wrapperTextInTabBarUser: {
        flex: 1,
        height: 60,
        backgroundColor: color.none,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapperTabBarSearch: {
        width: size.wid,
        height: 50,
        backgroundColor: color.none,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderColor: color.icon,
    },
    wrapperTextInTabBarSearch: {
        flex: 1,
        height: 40,
        backgroundColor: color.none,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapperTextNotLength: {
        flex: 1,
        height: 55,
        backgroundColor: color.none,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapperBackButton:{
        width: 50,
    },
    noBorder: {
        borderBottomWidth: 0,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
    },
    shadow: {
        shadowColor: color.text,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
    },
    haveBorderBottom: {
        borderBottomWidth: 0.5,
        borderColor: color.icon,
    },
});


export default part;