import React from 'react';
import { View, Text } from 'react-native';
import { Header, Input, Item, Icon, Button } from 'native-base';

class Search extends React.Component {
    state = {
        pokeSearch: ""
    }
    searchPoke = () => {

    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header
                    searchBar
                    rounded
                >
                    <Item>
                        <Icon name="ios-search" onPress={this.searchPoke} />
                        <Input
                            value={this.state.PokeSearch}
                            placeholder="Let's Search Pokemon"
                            onChangeText={(pokeSearch) => this.setState({ pokeSearch })}
                        />
                    </Item>

                </Header>
            </View>
        )
    }
}


//export staff
export default Search;