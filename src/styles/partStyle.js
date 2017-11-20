import {StyleSheet, Dimensions, Platform} from 'react-native';
import * as color from './color';
import * as size from './size';
import {wid, hei} from "./size";

const part = StyleSheet.create({
    // NAV BAR
    navTop: {
        paddingTop: (Platform.OS === 'ios') ? 20 : 0,
        height: (Platform.OS === 'ios') ? 60 : 40,
        borderBottomWidth: 0,
        backgroundColor: color.backGround,
        alignItems: 'center',

    },
    navTopNewFeed: {
        height: 40,
        borderBottomColor: color.icon,
        borderBottomWidth: 0,
        backgroundColor: color.backGround,
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
    itemInformation: {
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
    wrapperUserInFeature: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    wrapperFullCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.text,
    },
    wrapperAvatarInDrawer: {
        justifyContent: 'center',
        width: wid * 2 / 12,
        flex: 1,
    },
    wrapperTextInDrawer: {
        justifyContent: 'center',
        width: wid * 7 / 12,
        flex: 1,
    },
    wrapperImageInGetFull: {
        position: 'relative',
        width: wid,
        height: 250,
        justifyContent: 'center',
        backgroundColor: color.backGround,
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
        height: hei / 3,
        marginBottom: 0.5,
    },
    wrapperIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 25,
        width: 40,
    },
    wrapperDeadline: {
        marginLeft: 3,
        width: wid - 20,
        height: 10,
        borderRadius: 5,
        backgroundColor: color.lightGray,
    },
    wrapperProfile: {
        width: size.profileProgressWidth,
        height: 10,
        backgroundColor: color.lightGray,
    },
    wrapperTextLoadMore: {
        justifyContent: 'center',
        alignItems: 'center',
        width: wid,
        height: 30,
    },
    wrapperTextCenter: {
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
        backgroundColor: color.text,
    },
    wrapperStatusBarNoPadding: {
        width: size.wid,
        height: 20,
        backgroundColor: color.none,
    },

    wrapperRowCenter: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    wrapperAvatarUser: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flex: 1,
        width: size.wid / 3
    },
    wrapperInformationUser: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: size.wid * 2 / 3,

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
        top: Platform.OS === 'ios' ? 20 : 0,
    },
    iconViewMore:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.green,
        width: 14,
        height: 14,
        borderRadius: 7,
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
        fontFamily: (Platform.OS === 'ios') ? 'Montserrat' : 'Montserrat-Thin',
        fontSize: size.describe,
        lineHeight: 10,
        height: (Platform.OS === 'ios') ? 30 : 40,
        fontWeight: (Platform.OS === 'ios') ? '400' : 'normal',
    },
    inputTheme02: {
        fontFamily: (Platform.OS === 'ios') ? 'Montserrat' : 'Montserrat-Medium',
        height: 30,
        padding: 0,
        margin: 0,
        fontSize: 13,
        lineHeight: 10,
        color: color.darkGray,
        fontWeight: (Platform.OS === 'ios') ? '400' : 'normal',

    },
    inputTheme03: {
        fontFamily: (Platform.OS === 'ios') ? 'Montserrat' : 'Montserrat',
        fontSize: 14,
        lineHeight: 10,
        fontWeight: (Platform.OS === 'ios') ? '400' : 'normal',

    },
    inputTheme04: {
        height: 100,
        fontFamily: (Platform.OS === 'ios') ? 'Montserrat' : 'Montserrat',
        fontSize: 13,
        lineHeight: 20,
        fontWeight: (Platform.OS === 'ios') ? '400' : 'normal',

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
        backgroundColor: color.none,
    },
    avatarUserTiny: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: color.none,
    },
    avatarUserLikeGrid: {
        width: (wid - 24) / 3 - 4,
        height: (wid - 24) / 3 - 4,
        borderRadius: ((wid - 24) / 3 - 4) / 2,
        backgroundColor: color.none,
    },
    avatarUserNormalSquare: {
        width: 50,
        height: 50,
        backgroundColor: color.none,
    },
    avatarUserInDrawer: {
        width: size.wid / 5,
        height: size.wid / 5,
        borderRadius: size.wid / 10,
        backgroundColor: color.none,
    },
    avatarUserSmall: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: color.backGround,
    },

    image: {
        height: (Platform.OS === 'ios') ? (size.hei * 0.6) : (size.hei * 0.6 - 2),
        width: (Platform.OS === 'ios') ? (wid - 16) : (wid - 18),
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.backGround,
        borderRadius: 15,
        marginRight: 8,
        marginLeft: 8,
    },
    wrapperImage: {
        paddingTop: 2,
        paddingBottom: 2,
        height: size.hei * 0.6,
        width: wid - 16,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.backGround,
        borderRadius: 15,
        marginRight: 8,
        marginLeft: 8,
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
        width: (Platform.OS === 'ios') ? ((wid - 24) / 3 - 4) : ((wid - 24) / 3 - 6),
        height: (Platform.OS === 'ios') ? ((wid - 24) / 3 - 4) : ((wid - 24) / 3 - 6),
        borderRadius: 15,
    },
    wrapperImageInGrid: {
        width: (wid - 24) / 3 - 4,
        height: (wid - 24) / 3 - 4,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    },

    imageInFeature: {
        position: 'relative',
        width: wid - 16,
        height: hei / 3 - 16,
        borderRadius: 15,
    },

    titleLargeDarkBold: {
        fontFamily: (Platform.OS === 'ios') ? 'Montserrat' : 'Montserrat-Bold',
        fontSize: 30,
        fontWeight: (Platform.OS === 'ios') ? 'bold' : undefined,
        color: color.text,
    },
    titleProfile: {
        fontFamily: (Platform.OS === 'ios') ? 'Montserrat' : 'Montserrat-Medium',
        fontSize: 16,
        color: color.darkGray,
    },


    titleSmallDarkGrayBold: {
        fontFamily: (Platform.OS === 'ios') ? 'Montserrat' : 'Montserrat-Medium',
        fontSize: size.titleSmall,
        color: color.darkGray,
        fontWeight: (Platform.OS === 'ios') ? '600' : 'normal',
    },
    titleSmallDarkGrayThin: {
        fontFamily: (Platform.OS === 'ios') ? 'Montserrat' : 'Montserrat-Medium',
        fontSize: size.titleSmall,
        color: color.darkGray,
        fontWeight: (Platform.OS === 'ios') ? '400' : 'normal',

    },

    titleGrayThin: {
        fontFamily: (Platform.OS === 'ios') ? 'Montserrat' : 'Montserrat-Medium',
        fontSize: size.titleNormal,
        color: color.gray,
        fontWeight: (Platform.OS === 'ios') ? '400' : 'normal',

    },
    titleGrayRules: {
        fontFamily: (Platform.OS === 'ios') ? 'Montserrat' : 'Montserrat-Medium',
        fontSize: 12,
        color: color.gray,
        fontWeight: (Platform.OS === 'ios') ? '400' : 'normal',

    },
    titleDarkGrayThin: {
        fontFamily: (Platform.OS === 'ios') ? 'Montserrat' : 'Montserrat-Medium',
        fontSize: size.titleNormal,
        color: '#3a3a3a',
        fontWeight: (Platform.OS === 'ios') ? '500' : 'normal',
    },
    titleDarkBold: {
        fontFamily: (Platform.OS === 'ios') ? 'Montserrat' : 'Montserrat-Bold',
        fontSize: size.title,
        color: color.text,
        fontWeight: (Platform.OS === 'ios') ? '700' : 'normal',
    },
    titleSmallBlue: {
        fontFamily: (Platform.OS === 'ios') ? 'Montserrat' : 'Montserrat-Medium',
        fontSize: size.titleSmall,
        color: color.titleBlue,
        fontWeight: (Platform.OS === 'ios') ? '600' : 'normal',
    },
    titleSmallDarkGray: {
        fontFamily: (Platform.OS === 'ios') ? 'Montserrat' : 'Montserrat-Medium',
        fontSize: size.titleSmall,
        color: color.darkGray,
        fontWeight: (Platform.OS === 'ios') ? '600' : 'normal',
    },
    titleNormalLight: {
        fontFamily: (Platform.OS === 'ios') ? 'Montserrat' : 'Montserrat-Medium',
        fontSize: 11,
        color: color.navTitle,
        fontWeight: (Platform.OS === 'ios') ? '500' : 'normal',
    },
    titleBigLight: {
        fontFamily: (Platform.OS === 'ios') ? 'Montserrat' : 'Montserrat-Medium',
        fontSize: 15,
        color: color.navTitle,
        fontWeight: (Platform.OS === 'ios') ? '500' : 'normal',

    },
    titleNormalLightNav: {
        fontFamily: (Platform.OS === 'ios') ? 'Montserrat' : 'Montserrat-Medium',
        fontSize: size.title,
        color: color.navTitle,
        fontWeight: (Platform.OS === 'ios') ? '500' : 'normal',
        marginLeft: -50,
    },

    titleNormalDarkGray: {
        fontFamily: (Platform.OS === 'ios') ? 'Montserrat' : 'Montserrat-Medium',
        fontSize: size.title,
        color: color.text,
        fontWeight: (Platform.OS === 'ios') ? '500' : 'normal',
    },
    titleMenuModal: {
        fontFamily: (Platform.OS === 'ios') ? 'Montserrat' : 'Montserrat-Medium',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 50,
        fontSize: 14,
        color: color.darkGray,
        fontWeight: (Platform.OS === 'ios') ? '500' : 'normal',
    },

    describeDarkGray: {
        fontFamily: (Platform.OS === 'ios') ? 'Montserrat' : 'Montserrat-Medium',
        fontSize: size.describe,
        color: color.darkGray,
        fontWeight: (Platform.OS === 'ios') ? '400' : 'normal',

    },
    describeGray: {
        fontFamily: (Platform.OS === 'ios') ? 'Montserrat' : 'Montserrat-Medium',
        fontSize: size.describe,
        color: color.gray,
        fontWeight: (Platform.OS === 'ios') ? '400' : 'normal',

    },
    describeLight: {
        fontFamily: (Platform.OS === 'ios') ? 'Montserrat' : 'Montserrat-Medium',
        fontSize: size.describe,
        color: color.navTitle,
        fontWeight: (Platform.OS === 'ios') ? '400' : 'normal',

    },
    describeLightGray: {
        fontFamily: (Platform.OS === 'ios') ? 'Montserrat' : 'Montserrat-Medium',
        fontSize: size.describe,
        color: color.lightGray,
        fontWeight: (Platform.OS === 'ios') ? '400' : 'normal',

    },
    describeItalicDark: {
        fontFamily: (Platform.OS === 'ios') ? 'Montserrat' : 'Montserrat-Medium',
        fontSize: size.describe,
        color: color.gray,
        fontWeight: (Platform.OS === 'ios') ? '400' : 'normal',

    },
    describeInImage: {
        fontFamily: (Platform.OS === 'ios') ? 'Montserrat' : 'Montserrat-Medium',
        fontSize: 12,
        color: color.gray,
    },
    wrapperTextInImage: {
        width: wid,
        padding: 10,
        backgroundColor: color.none,
    },
    wrapperTitleFeature: {
        width: wid - 16,
        height: 80,
        padding: 10,
        paddingLeft: 18,
        borderRadius: 15,
        position: 'absolute',
        backgroundColor: color.none,
        bottom: 0,
    },
    wrapperFeatureIcon: {
        position: 'absolute',
        backgroundColor: color.none,
        top: 0,
        right: 20,
    },
    titleInImage: {
        fontFamily: (Platform.OS === 'ios') ? 'Montserrat' : 'Montserrat-Medium',
        color: color.darkGrayText,
        fontSize: 12,
        fontWeight: (Platform.OS === 'ios') ? 'bold' : 'normal',
    },
    titlePost: {
        fontFamily: (Platform.OS === 'ios') ? 'Montserrat' : 'Montserrat-Bold',
        color: color.darkGrayText,
        fontSize: 20,
        fontWeight: (Platform.OS === 'ios') ? 'bold' : 'normal',

    },
    titleGroup: {
        fontFamily: (Platform.OS === 'ios') ? 'Montserrat' : 'Montserrat-Medium',
        color: color.navTitle,
        padding: 3,
        paddingLeft: 7,
        paddingRight: 7,
        fontWeight: (Platform.OS === 'ios') ? '600' : 'normal',
        fontSize: 12,
    },
    textButton: {
        fontFamily: (Platform.OS === 'ios') ? 'Montserrat' : 'Montserrat-Medium',
        marginTop: -2,
        fontSize: size.describe,
        color: color.gray,
        fontWeight: (Platform.OS === 'ios') ? '600' : 'normal',

    },
    textTitleFeature: {
        fontFamily: (Platform.OS === 'ios') ? 'Montserrat' : 'Montserrat-Medium',
        color: color.navTitle,
        fontSize: 23,
        fontWeight: (Platform.OS === 'ios') ? '500' : 'normal',

    },
    //BUTTON

    buttonGroup: {
        backgroundColor: color.none,
        borderRadius: 5,
        justifyContent: 'center',
    },
    buttonAcceptFull: {
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        height: 35,
        backgroundColor: color.main,

    },
    buttonLeftRegisterMain: {
        borderRadius: 100,
        marginTop: 5,
        backgroundColor: color.main,
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 20,
        paddingLeft: 20,

    },
    buttonLeftRegisterGray: {
        borderRadius: 100,
        marginTop: 5,
        backgroundColor: color.icon,
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 20,
        paddingLeft: 20,

    },
    buttonRounded: {
        borderRadius: 50,
        marginTop: 5,
        backgroundColor: color.main,
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 20,
        paddingLeft: 20,

    },
    feedback: {
        fontFamily: (Platform.OS === 'ios') ? 'Montserrat' : 'Montserrat-Medium',
        fontSize: 13,
        color: color.gray,
        fontWeight: (Platform.OS === 'ios') ? '400' : 'normal',
    },
    // PADDING
    padding: {
        padding: 10,
    },
    paddingLBR: {
        paddingLeft: 10,
        paddingBottom: 10,
        paddingRight: 10,
    },
    paddingIcon: {
        paddingRight: 5,
    },
    paddingRight: {
        paddingRight: 5,
    },
    paddingRightFar: {
        paddingRight: 10,
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
    paddingLR: {
        paddingLeft: 10,
        paddingRight: 10,
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
    noMargin: {
        margin: 0,
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
        backgroundColor: color.none,
    },
    cardButtonFeature: {
        width: size.wid,
        height: size.iconBig + 15,
        backgroundColor: color.none,
        bottom: 7,
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
    },
    wrapperGridImage: {
        marginLeft: 6,
        marginBottom: 6,
        width: (wid) / 3 - 8,
        height: (wid) / 3 - 8,
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
    wrapperBackButton: {
        width: 50,
    },
    noBorder: {
        borderBottomWidth: 0,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
    },
    shadow: {
        elevation: 1,
        shadowColor: color.transparentBlack,
        shadowOffset: {width: 0.5, height: 1},
        shadowOpacity: 0.2,
    },
    haveBorderBottom: {
        borderBottomWidth: 0.5,
        borderColor: color.icon,
    },


    // TIME LINE
    wrapperTimeLine: {
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    timeLineStraight: {
        width: 5,
        height: 70,
        backgroundColor: color.icon,
    },
    timeLineCircle: {
        width: 14,
        height: 14,
        borderRadius: 7,
        top: 20,
        position: 'absolute',
        backgroundColor: color.titleBlue
    },
});


export default part;