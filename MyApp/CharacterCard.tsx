import React from 'react';
import {View, Image} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import {Character} from './models';

interface Props{
    character: Character, 
}

interface State{
    open:boolean,
}

export default class CharacterCard extends React.Component<Props,State>{
    state:State={
        open:false,
    }

    handleCardPress=()=>{
        let open = this.state.open;
        this.setState({open:!open});
    }

    render(){ 
        const character = this.props.character;
        const image:string =character.image;
        const LeftContent = () => <Image style={{width: 50, height: 50 ,borderRadius:25 }} source={{uri:image}}/>
        return(
            <Card onPress={this.handleCardPress}>
                <Card.Title title={this.props.character.name} left={LeftContent} />
                {this.state.open?
                    <View>
                        <Card.Content>
                            <Paragraph>Status : {character.status}</Paragraph>
                            <Paragraph>Species : {character.species}</Paragraph>
                            <Paragraph>Type : {character.type}</Paragraph>
                            <Paragraph>Gender : {character.gender}</Paragraph>
                        </Card.Content>
                        <Card.Cover style={{width:'90%',margin:'5%', borderRadius:10}} source={{ uri: image }} />
                    </View>:<View></View>
                }    
            </Card>
        );
    }
}