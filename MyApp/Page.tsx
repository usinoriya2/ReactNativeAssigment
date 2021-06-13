import React from 'react';
import {View, Image, ScrollView} from 'react-native';
import {Button} from 'react-native-paper';
import {Character} from './models';

interface Props{
    pageNumber: number, 
}

interface State{

}

export default class Page extends React.Component<Props,State>{
    state:State={
    }

    render(){ 
        
        return(
            <Button  mode="contained" onPress={() => console.log('Pressed')}>{this.props.pageNumber}</Button>
        );
    }
}