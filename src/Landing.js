import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from 'native-base';

var myBackground = require('../assets/LandingPage.png') // .. take me out from src to find LandingPage.png

class Landing extends React.Component {
    render() {
        return (
            <View>
                <Image source={myBackground} />
                <Button
                    block={true}
                    style={style.ButtonStyle}
                    onPress={() => this.props.switchScreen("search")}
                >
                    <Text style={style.ButtonText} >Start Searching</Text>
                </Button>
            </View>
        )
    }
}

const style = {
    ButtonStyle: {
        margin: 5,
    },
    ButtonText: {
        color: 'white',
    },
}

export default Landing;