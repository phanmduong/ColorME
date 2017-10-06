import {StyleSheet, Dimensions} from 'react-native';
import * as color from './color';
import * as size from './size';


let wid = Dimensions.get('window').width;

const part = StyleSheet.create({
    // NAV BAR
    navTop:{
        borderBottomWidth: 0,
        shadowColor: 'transparent',
        backgroundColor: color.main,
        alignItems: 'center',

    },

    //WRAPPER
    wrapperContainer:{
        backgroundColor: color.backGround,
    },

    //TITLE
    navTitle:{
        color: color.navTitle,
    },

    //ICON
    icon:{
        color: color.text,
        width: 18,
        height: 18,
        margin: 5,
    },
    iconLight:{
        color: color.navTitle,
        width: 18,
        height: 18,
        margin: 5,
    },

    // TEXT INPUT
    inputSearch:{
        width: wid - wid * 0.12,
        height: 30,
        color: color.navTitle,
        padding: 5,
        fontSize: size.title,
    },
    inputTheme01:{
        fontSize: size.describe,
        height: 30,
    },
    inputTheme02:{
        fontSize: size.title,
    },
    inputTheme03:{
        fontSize: size.describe,
        height: 40,

    },

    //BORDER = NONE
    borderNone:{
        borderBottomWidth:0,
        borderTopWidth: 0,
    },

    // FORM
    formLoginRegister:{
        margin: 20,
        borderColor: color.none,
    },


    //IMAGE
    avatarUserBig:{
        width: 100,
        height: 100,
        borderRadius: 50,
        margin: 5,
    },
    avatarUserSmall:{
        width: 40,
        height: 40,
        borderRadius: 20,
    },

    online:{
        borderWidth: 1,
        padding: 1,
        borderRadius: 50,
        borderColor: color.main
    },

    //CONTENT
    contentMid:{
        padding: 15,
        alignItems: 'center',
    },


    // TEXT
    titleBigDark:{
        fontSize : size.title,
        color: color.text,
        fontWeight: '800',
    },
    titleBigLightThin:{
        fontSize : 25,
        color: color.navTitle,
        fontWeight: '300',
    },
    titleSmallDarkBold:{
        fontSize : size.titleSmall,
        color: color.text,
        fontWeight: '700',
    },
    titleSmallDark:{
        fontSize : size.titleSmall,
        color: color.text,
        fontWeight: 'normal',
    },
    describeDark:{
        fontSize : size.describe,
        color: color.text,
        fontWeight: '400',
    },
    describeDarkGray:{
        fontSize : size.describe,
        color: 'rgb(89, 89, 89)',
        fontWeight: '400',
    },
    describeLight:{
        fontSize : size.describe,
        color: color.navTitle,
        fontWeight: '600',
    },
    describeGray:{
        fontSize : size.describe,
        color: color.gray,
        fontWeight: '400',
    },
    describeLightGray:{
        fontSize : size.describe,
        color: color.lightGray,
        fontWeight: '400',
    },
    describeItalicDark:{
        fontStyle: 'italic',
        fontSize : size.describeSmall,
        color: color.gray,
        fontWeight: '400',
    },

    //BUTTON
    buttonTheme01:{
        backgroundColor: color.main,
        justifyContent:'center',
        width: wid - wid*0.1,
        margin: 15,
        borderRadius: 0,
    },


    // PADDING
    padding:{
        padding: 10,
    },
    paddingRight:{
        paddingRight: 5,
    },
    paddingLeft:{
        paddingLeft: 5,
    },
    paddingBottom:{
        paddingBottom: 5,
    },
    paddingTop:{
        paddingTop: 5,
    },
    paddingTRB:{
        paddingRight: 5,
        paddingBottom: 5,
        paddingTop: 5,
    },

    // LIST ITEM
    listItem:{
        backgroundColor: color.backGround
    }

});


export default part;