import React, {Component} from 'react';
import {
    Container
} from 'native-base';
import part from '../../styles/partStyle';
import {MessageTab} from '../../navigators/appRouter';


export default class newFeedComponent extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Container style={part.wrapperContainer}>
            </Container>
        );
    }
}

