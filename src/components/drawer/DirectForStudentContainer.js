import React, {Component} from 'react';
import {
    Text,
    View,
    FlatList,
    RefreshControl, Platform
} from 'react-native';
import styles from '../../styles/partStyle';
import {Container, Left} from 'native-base';
import {
    BASE_HEADER_TITLE,
    NULL_DATA
} from '../../constants/text';
import * as baseAction from "../../actions/baseAction";
import ListBase from "./listBase";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Loading from '../../commons/Loading';
import TextNullData from '../../commons/TextNullData';
import BackButton from '../../commons/BackButton';


//let token = "yJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIsImlzcyI6Imh0dHA6Ly9hcGkuY29sb3JtZS52bi9sb2dpbiIsImlhdCI6MTUyMTAwMTQ0NCwiZXhwIjoxNTIxNjA2MjQ0LCJuYmYiOjE1MjEwMDE0NDQsImp0aSI6IkRqTGNybjNocnRvQUZDdm0ifQ.VHl36Yeegp72KAZHWg9jQh8JCRKr5LpvKO8NI5ldRHA"
class DirectForStudentContainer extends Component {
    constructor() {
        super();
        this.state = {
            base: "",
            isLoadingState: false,
            isLoading: false,
        }
    }

    componentWillMount() {
        this.props.baseAction.getListBase();
    }

    refreshList() {
        this.props.baseAction.getListBase();
    }

    renderItem({item}) {
        console.log(item);
        return (
            <Text>{item}</Text>
        );
    }


    render() {
        //console.log(this.props.isRefresh)
        const {navigate, goBack} = this.props.navigation;
        const {bases} = this.props;
        console.log(bases);
        return (
            <Container style={styles.wrapperContainer}>

                <View key="fixed-header" style={styles.iconInDrawerNav}>
                    <Left style={Platform.OS === 'ios' ? {marginTop: 20} : {marginTop: 10}}>
                        <BackButton goBack={goBack}/>
                    </Left>
                </View>

                <View style={{flex: 1}}>
                    {this.props.isLoading || this.state.isLoadingState ?
                        (<Loading/>)
                        :
                        (<FlatList
                            showsVerticalScrollIndicator={false}
                            style = {styles.StyleOfAllBase}
                            data={this.props.bases}
                            //git onPress = {()
                            renderItem={({item}) => {
                                return (<ListBase
                                    item={item}
                                />)
                            }
                            }
                            onEndReached={() => {
                                console.log(1)
                            }}
                            onEndReachedThreshold={5}
                            refreshControl={
                                <RefreshControl
                                    refreshing={this.props.isRefresh}
                                    onRefresh={
                                        () => this.refreshList()
                                    }
                                />
                            }
                            // ListFooterComponent={
                            //     () => {console.log(1)}
                            // }
                        />)

                    }
                </View>

            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoading: state.base.isLoading,
        isLoadingMore: state.base.isLoadingMore,
        isRefresh: state.base.isLoadingRefresh,
        bases: state.base.bases,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        baseAction: bindActionCreators(baseAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DirectForStudentContainer)
