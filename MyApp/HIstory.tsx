import React from 'react';
import { View, ScrollView } from 'react-native';
import CharacterCard from './CharacterCard';
import { Character } from './models';
import { connect } from "react-redux";
import { addCharacters } from './actions/historyActions';
import { ReduxState } from './Main';
import { Button } from 'react-native-paper';

interface OuterCharacterProps {
    navigation: any,
}

interface StateProps {
    characterHistory: any,
}

interface ActionProps {
    addCharacters: any,
}

type CharacterProps = OuterCharacterProps & StateProps & ActionProps

interface CharacterState {
}

class History extends React.Component<CharacterProps, CharacterState>{
    state: CharacterState = {
    }

    goToMain = () => {
        this.props.navigation.navigate('Main');
    }

    render() {
        return (
            <ScrollView style={{ height: '85%' }}>
                <Button style={{ height: 40, margin: 10 }} mode="outlined" dark={true} onPress={this.goToMain}>BACK</Button>
                <View>
                    {this.props.characterHistory.characterHistory.map((character: any) => {
                        return (<CharacterCard fromHistory={true} character={character} />);
                    })}
                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state: ReduxState) => ({
    characterHistory: state.characterHistory
});


export default connect<StateProps, ActionProps, OuterCharacterProps, ReduxState>(mapStateToProps, { addCharacters })(History)
