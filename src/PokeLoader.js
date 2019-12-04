import React from "react";
import { View, Text, Image } from "react-native";

var myBackground = require('../assets/SearchBackground1.png')
class PokeLoader extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Image
                    source={{ uri: "https://media1.tenor.com/images/3af1cc2e440012b9a79255b4f19190fc/tenor.gif?itemid=14844414" }}
                    style={styles.img}
                />
                {/* <Image source={myBackground} /> */}
            </View>

        )
    }
}

const styles = {
    img: {
        flex: -2,
        height: 420,
        width: 420,
        justifyContent: 'center',
        alignItems: 'center',

    }
}

export default PokeLoader;