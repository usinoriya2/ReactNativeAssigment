import React from 'react';
import { View, Image } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { connect } from "react-redux"
import { Character } from './models';
import { addCharacters } from './actions/historyActions';
import { ReduxState } from './Main';

interface OuterCharacterProps {
    character: Character,
}

interface StateProps {
    characterHistory: Character[],
}

interface ActionProps {
    addCharacters: any,
}

type CharacterProps = OuterCharacterProps & StateProps & ActionProps

interface CharacterState {
    open: boolean,
}

class CharacterCard extends React.Component<CharacterProps, CharacterState>{
    state: CharacterState = {
        open: false,
    }

    handleCardPress = () => {
        let open = this.state.open;
        this.props.addCharacters(this.props.character);
        console.log(this.props.characterHistory);
        this.setState({ open: !open });
    }

    render() {
        const character = this.props.character;
        const image: string = character.image;
        const LeftContent = () => <Image style={{ width: 50, height: 50, borderRadius: 25 }} source={{ uri: image }} />
        return (
            <Card style={{ marginBottom: 5 }} onPress={this.handleCardPress}>
                <Card.Title title={this.props.character.name} left={LeftContent} />
                {this.state.open ?
                    <View>
                        <Card.Content>
                            <Paragraph>Status : {character.status}</Paragraph>
                            <Paragraph>Species : {character.species}</Paragraph>
                            <Paragraph>Type : {character.type === '' ? "-" : character.type}</Paragraph>
                            <Paragraph>Gender : {character.gender}</Paragraph>
                        </Card.Content>
                        <Card.Cover style={{ width: '90%', margin: '5%', borderRadius: 10 }} source={{ uri: image }} />
                    </View> : <View></View>
                }
            </Card>
        );
    }
}

const mapStateToProps = (state: ReduxState) => ({
    characterHistory: state.characterHistory
});


export default connect<StateProps, ActionProps, OuterCharacterProps, ReduxState>(mapStateToProps, { addCharacters })(CharacterCard)