import React, {Component} from 'react';
import {
    View, Text, ScrollView
} from 'react-native';
import {Col, Row, Grid} from "react-native-easy-grid";
import part from '../styles/partStyle';

export default class AchievementsComponent extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
            arr:[1,2,3,4,5]
        }
    }

    render() {
        return (
            <ScrollView style={{flex: 1}}>
                {
                    this.state.arr.map((item, i) => {
                        return(
                            <View>
                                <Grid>
                                    <Col style={{backgroundColor: 'red', height: 100, borderWidth:1}}><Text>{item}</Text></Col>
                                    <Col style={{backgroundColor: 'blue', height: 100, borderWidth:1}}><Text>{item}</Text></Col>
                                    <Col style={{backgroundColor: 'pink', height: 100, borderWidth:1}}><Text>{item}</Text></Col>
                                </Grid>
                                <Grid>
                                    <Col style={{flex: 1}}>
                                        <Row style={{backgroundColor: 'gray', height: 100}}><Text>{item}</Text></Row>
                                        <Row style={{backgroundColor: 'yellow', height: 100}}><Text>{item}</Text></Row>
                                    </Col>
                                    <Col style={{backgroundColor: 'black', height: 200, flex: 2}}><Text>{item}</Text></Col>
                                </Grid>
                            </View>
                        )
                    })
                }


            </ScrollView>

        );
    }
}

function mapStateToProps(state) {
    return {
        post: state.getFullInfoAboutOnePost.post,
        user: state.login.user,
    }
}
