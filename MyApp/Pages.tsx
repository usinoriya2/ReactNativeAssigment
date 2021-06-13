import React from 'react';
import {View, Image, ScrollView} from 'react-native';
import {Character} from './models';
import Page from './Page';

interface Props{
    numberOfPages: number, 
}

interface State{

}

export default class Pages extends React.Component<Props,State>{
    state:State={
    }
    
    render(){ 
        let renderPages = () =>{
            const numberOfPages = this.props.numberOfPages;
            let tempArray = [];
            for(let i=0; i<numberOfPages; i++){
                tempArray.push(<Page pageNumber={i+1}/>);
            }
            return tempArray;
        }
        return(
            <ScrollView horizontal={true}>{renderPages()}</ScrollView>
        );
    }
}