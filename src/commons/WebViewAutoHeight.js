import React from 'react';
import {WebView, View, Text, Dimensions} from "react-native";
import PropTypes from 'prop-types';


const BODY_TAG_PATTERN = /\<\/ *body\>/;

var script = `
;(function() {
var wrapper = document.createElement("div");
wrapper.id = "height-wrapper";

while (document.body.firstChild) {
    wrapper.appendChild(document.body.firstChild);
}
document.body.appendChild(wrapper);
var i = 0;
function updateHeight() {
    document.title = wrapper.clientHeight;
    window.location.hash = ++i;
}
updateHeight();
window.addEventListener("load", function() {
    updateHeight();
    setTimeout(updateHeight, 1000);
});
window.addEventListener("resize", updateHeight);
}());
`;


const style = `
<style>
body, html, #height-wrapper {
    margin: 0;
    padding: 0;
}
#height-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
}
p{
    font-size: 14px;
    padding-left: 10px;
    padding-right: 10px;
    font-family: sans-serif;
}
table, th, td{
    margin: 5px;
    padding: 5px;
    border: 1px solid black;
    border-collapse: collapse;
    text-align: center;
}
p.wrapperImg{
    padding-left: 0;
    padding-right: 0;
}
table:{
    margin: 10px;
    padding: 10px;
}
iframe{
    width: 100%;
    height: 150px;
}
</style>
<script>
${script}
</script>
`;

const codeInject = (html) => html.replace(BODY_TAG_PATTERN, style + "</body>");

let {height, width} = Dimensions.get('window');

class WebViewAutoHeight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            realContentHeight: this.props.minHeight
        };
        this.handleNavigationChange = this.handleNavigationChange.bind(this);
    }

    handleNavigationChange(navState) {
        if (navState.title) {
            const realContentHeight = parseInt(navState.title, 10) || 0;
            this.setState({realContentHeight});
        }
        if (typeof this.props.onNavigationStateChange === "function") {
            this.props.onNavigationStateChange(navState);
        }
    }

    render() {
        const {source, style, ...otherProps} = this.props;
        let sourceData = source.replace(/width: 100%px/g, 'width: 100%');
        const html = '<!DOCTYPE html><html><body>'
            +
            sourceData.replace(/<p><img/g, '<p class="wrapperImg"><img')
            +
            '</body></html>';


        if (!html) {
            throw new Error("WebViewAutoHeight supports only source.html");
        }

        if (!BODY_TAG_PATTERN.test(html)) {
            throw new Error("Cannot find </body> from: " + html);
        }

        return (
            <View>
                <WebView
                    {...otherProps}
                    source={{html: codeInject(html)}}
                    scrollEnabled={false}
                    style={{...style, ...{height: this.state.realContentHeight, width: width}}}
                    javaScriptEnabled
                    onNavigationStateChange={this.handleNavigationChange}
                />
            </View>
        );
    }

};

WebViewAutoHeight.propTypes = {
    source: PropTypes.object.isRequired,
    injectedJavaScript: PropTypes.string,
    minHeight: PropTypes.number,
    onNavigationStateChange: PropTypes.func,
    style: WebView.propTypes.style,
};

export default WebViewAutoHeight;