import React from 'react';
import {View, Image, ScrollView, BackHandler} from 'react-native';
import {Button} from 'react-native-paper';
import {Character} from './models';

interface Props{
    pageNumber: number,
    currentPage:boolean,
    onButtonPressed:(pageNumber:number)=>void, 
}

interface State{

}

export default class Page extends React.Component<Props,State>{
    state:State={
    }
    
    render(){ 
        const currentPage = this.props.currentPage;
        let handleButtonPress = () =>{
            this.props.onButtonPressed(this.props.pageNumber);
        }
        return(
            <Button  style={{height:40, margin:10}} mode={currentPage?"contained":"outlined"} dark={true} onPress={handleButtonPress}>{this.props.pageNumber}</Button>
        );
    }
}